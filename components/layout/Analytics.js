'use client';

import { useState, useEffect, useCallback } from 'react';
import Script from 'next/script';
import { SpeedInsights } from "@vercel/speed-insights/next"

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? '';
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID ?? '';

// Helpers cookies y DNT
function getConsent() {
  if (typeof document === 'undefined') return '';
  const m = document.cookie.match(/(?:^|; )eb_consent=([^;]*)/);
  return m ? decodeURIComponent(m[1]) : '';
}

function setConsent(val) {
  if (typeof document === 'undefined') return;
  const secure = typeof location !== 'undefined' && location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `eb_consent=${encodeURIComponent(val)}; Max-Age=31536000; Path=/; SameSite=Lax${secure}`;
}

function dntEnabled() {
  if (typeof navigator === 'undefined') return false;
  return (
    navigator.doNotTrack === '1' ||
    (typeof window !== 'undefined' && window.doNotTrack === '1') ||
    navigator.msDoNotTrack === '1'
  );
}

export default function Analytics() {
  // Inicializar vacío para evitar hydration mismatch
  const [consent, setConsentState] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setConsentState(getConsent());
  }, []);

  const accept = useCallback(() => {
    setConsent('accepted');
    setConsentState('accepted');

    // GA Consent Mode v2
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        ad_storage: 'granted',
        analytics_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
      });
    }

    // Clarity consent
    if (typeof window !== 'undefined' && window.clarity) {
      window.clarity('consent');
    }
  }, []);

  const decline = useCallback(() => {
    setConsent('denied');
    setConsentState('denied');

    // GA Consent Mode v2
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        ad_storage: 'denied',
        analytics_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      });
    }

    // Clarity off
    if (typeof window !== 'undefined' && window.clarity) {
      window.clarity('consent', false);
    }
  }, []);

  const shouldLoadScripts = consent === 'accepted' && !dntEnabled();
  const shouldShowBanner = isClient && consent === '' && !dntEnabled();

  return (
    <>
      {/* Google Analytics 4 + Consent Mode v2 */}
      {shouldLoadScripts && GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              // Default: denied
              gtag('consent', 'default', {
                ad_storage: 'denied',
                analytics_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied'
              });
              gtag('config', '${GA_ID}');
            `}
          </Script>
          {/* Garantiza pasar a granted tras cargar gtag cuando ya hay consentimiento */}
          {consent === 'accepted' && (
            <Script id="ga-consent-grant" strategy="afterInteractive">
              {`
                if (window.gtag) {
                  window.gtag('consent', 'update', {
                    ad_storage: 'granted',
                    analytics_storage: 'granted',
                    ad_user_data: 'granted',
                    ad_personalization: 'granted'
                  });
                }
              `}
            </Script>
          )}
        </>
      )}

      {/* Microsoft Clarity */}
      {shouldLoadScripts && CLARITY_ID && (
        <Script id="clarity-init" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_ID}");
          `}
        </Script>
      )}

      {/* Vercel Speed Insights: no requiere consentimiento */}
      <SpeedInsights />

      {/* Banner de consentimiento */}
      {shouldShowBanner && (
        <div
          className="fixed inset-x-0 bottom-0 z-[1000]"
          style={{
            background: 'var(--color-surface-1)',
            color: 'var(--color-text)',
            borderTop: '1px solid var(--color-border)',
          }}
        >
          <div className="mx-auto flex max-w-[960px] flex-wrap items-center justify-between gap-3 p-3">
            <span className="text-sm">
              Usamos cookies para analítica (GA/Clarity). ¿Aceptas?
            </span>
            <div className="flex gap-2">
              <button
                onClick={accept}
                className="btn btn-primary"
                aria-label="Aceptar cookies de analítica"
              >
                Aceptar
              </button>
              <button
                onClick={decline}
                className="btn btn-tertiary"
                aria-label="Rechazar cookies de analítica"
              >
                Rechazar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}