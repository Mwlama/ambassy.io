"use client";

import { t } from 'i18next';
import Link from 'next/link';
import { useState } from 'react';

export default function PricingSection() {
  const [billingType, setBillingType] = useState<'monthly' | 'yearly'>('monthly');

  const handleBillingToggle = (type: 'monthly' | 'yearly') => {
    setBillingType(type);
  };

  const pricingData = {
    ambassador: {
      monthly: { price: t('pricing.plans.ambassador.price'), period: " "},
      yearly: { price: t('pricing.plans.ambassador.price'), period: '' }
    },
    pro: {
      monthly: { price: '$39.99', period: t('common.monthlyy') },
      yearly: { price: '$422', period: t('common.yearlyy') }
    },
    vip: {
      monthly: { price: '$299.99', period: t('common.monthlyy') },
      yearly: { price: '$3168', period: t('common.yearlyy') }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-transparent bg-clip-text text-white dark:text-black p-4">
      {/* Toggle Switch */}
      <div className="inline-flex bg-zinc-900 rounded-md mb-10">
        <button
          className={`px-4 py-2 text-sm rounded-md ${
            billingType === 'monthly' ? 'bg-zinc-800 text-white' : 'text-gray-400'
          }`}
          onClick={() => handleBillingToggle('monthly')}
        >
         {t('common.monthly')}
        </button>
        <button
          className={`px-4 py-2 text-sm rounded-md ${
            billingType === 'yearly' ? 'bg-zinc-800 text-white' : 'text-gray-400'
          }`}
          onClick={() => handleBillingToggle('yearly')}
        >
          {t('common.yearly')}
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl">
        {/* Ambassador Card */}
        <div className="rounded-lg border border-zinc-800 p-6 flex flex-col">
          <h2 className="text-xl font-bold mb-2">{t('pricing.plans.ambassador.title')}</h2>
          <p className="text-sm bg-clip-text text-white dark:text-black mb-4 h-24">
          {t('pricing.plans.ambassador.info')}
          </p>
          
          <div className="mb-6">
            <span className="text-3xl font-bold">{pricingData.ambassador[billingType].price}</span>
            <span className="text-gray-400 text-sm">{pricingData.ambassador[billingType].period}</span>
          </div>
          
          <div className="flex flex-col space-y-3 mb-auto">
            <div className="flex items-center">
              <span className="text-purple-500 mr-2">✓</span>
              <span className="text-sm">{t('pricing.plans.ambassador.bullet0')}</span>
            </div>
            <div className="flex items-center">
              <span className="text-purple-500 mr-2">✓</span>
              <span className="text-sm">{t('pricing.plans.ambassador.bullet1')}</span>
            </div>
            <div className="flex items-center">
              <span className="text-purple-500 mr-2">✓</span>
              <span className="text-sm">{t('pricing.plans.ambassador.bullet2')}</span>
            </div>
            <div className="flex items-center">
              <span className="text-purple-500 mr-2">✓</span>
              <span className="text-sm">{t('pricing.plans.ambassador.bullet3')}</span>
            </div>
            <div className="flex items-center">
              <span className="text-purple-500 mr-2">✓</span>
              <span className="text-sm">{t('pricing.plans.ambassador.bullet4')}</span>
            </div>
            <div className="flex items-center">
              <span className="text-purple-500 mr-2">✓</span>
              <span className="text-sm">{t('pricing.plans.ambassador.bullet5')}</span>
            </div>
          </div>
          <Link href="https://app.ambassy.io/login" passHref>
          <button className="mt-6 bg-black text-white border border-white py-3 rounded-md hover:bg-gray-500 transition-colors w-full">
          {t('common.getStarted')}
          </button>
          </Link>
        </div>
        
        {/* Pro Card */}
        <div className="rounded-lg border border-purple-700 bg-gradient-to-b from-purple-900/40 to-purple-900/10 p-6 flex flex-col">
          <h2 className="text-xl font-bold mb-2">{t('pricing.plans.pro.title')}</h2>
          <p className="text-sm bg-clip-text text-white dark:text-black mb-4 h-24">
          {t('pricing.plans.pro.info')} 
          </p>
          
          <div className="mb-6 flex items-center">
            <span className="text-3xl font-bold">{pricingData.pro[billingType].price}</span>
            <span className="text-gray-400 text-sm">{pricingData.pro[billingType].period}</span>
            {billingType === 'yearly' && (
              <span className="ml-2 bg-purple-500 text-white text-xs px-2 py-0.5 rounded">-12%</span>
            )}
          </div>
          
          <div className="flex flex-col space-y-3 mb-auto">
            <div className="flex items-center">
              <span className="text-purple-500 mr-2">✓</span>
              <span className="text-sm">{t('pricing.plans.pro.bullet0')}</span>
            </div>
            <div className="flex items-center">
              <span className="text-purple-500 mr-2">✓</span>
              <span className="text-sm">{t('pricing.plans.pro.bullet1')}</span>
            </div>
            <div className="flex items-center">
              <span className="text-purple-500 mr-2">✓</span>
              <span className="text-sm">{t('pricing.plans.pro.bullet2')}</span>
            </div>
            <div className="flex items-center">
              <span className="text-purple-500 mr-2">✓</span>
              <span className="text-sm">{t('pricing.plans.pro.bullet3')}</span>
            </div>
            <div className="flex items-center">
              <span className="text-purple-500 mr-2">✓</span>
              <span className="text-sm">{t('pricing.plans.pro.bullet4')}</span>
            </div>
            <div className="flex items-center">
              <span className="text-purple-500 mr-2">✓</span>
              <span className="text-sm">{t('pricing.plans.pro.bullet5')}</span>
            </div>
            <div className="flex items-center">
              <span className="text-purple-500 mr-2">✓</span>
              <span className="text-sm">{t('pricing.plans.pro.bullet6')}</span>
            </div>
          </div>
          <Link href="https://app.ambassy.io/login" passHref>
          <button className="mt-6 bg-purple-500 text-white py-3 rounded-md hover:bg-purple-600 transition-colors w-full">
          {t('common.getStarted')}
          </button>
          </Link>
        </div>
        
        {/* VIP Card */}
        <div className="rounded-lg border border-yellow-700 bg-gradient-to-b from-yellow-900/40 to-yellow-900/10 p-6 flex flex-col">
          <h2 className="text-xl font-bold mb-2">{t('pricing.plans.vip.title')}</h2>
          <p className="text-sm bg-clip-text text-white dark:text-black mb-4 h-24">
          {t('pricing.plans.vip.info')}
          </p>
          
          <div className="mb-6 flex items-center">
            <span className="text-3xl font-bold">{pricingData.vip[billingType].price}</span>
            <span className="text-gray-400 text-sm">{pricingData.vip[billingType].period}</span>
            {billingType === 'yearly' && (
              <span className="ml-2 bg-purple-500 text-white text-xs px-2 py-0.5 rounded">-12%</span>
            )}
          </div>
          
          <div className="flex flex-col space-y-3 mb-auto">
            <div className="flex items-center">
              <span className="text-purple-500 mr-2">✓</span>
              <span className="text-sm">{t('pricing.plans.vip.bullet0')}</span>
            </div>
            <div className="flex items-center">
              <span className="text-purple-500 mr-2">✓</span>
              <span className="text-sm">{t('pricing.plans.vip.bullet1')}</span>
            </div>
            <div className="flex items-center">
              <span className="text-purple-500 mr-2">✓</span>
              <span className="text-sm">{t('pricing.plans.vip.bullet2')}</span>
            </div>
            <div className="flex items-center">
              <span className="text-purple-500 mr-2">✓</span>
              <span className="text-sm">{t('pricing.plans.vip.bullet3')}</span>
            </div>
            <div className="flex items-center">
              <span className="text-purple-500 mr-2">✓</span>
              <span className="text-sm">{t('pricing.plans.vip.bullet4')}</span>
            </div>
            <div className="flex items-center">
              <span className="text-purple-500 mr-2">✓</span>
              <span className="text-sm">{t('pricing.plans.vip.bullet5')}</span>
            </div>
            <div className="flex items-center">
              <span className="text-purple-500 mr-2">✓</span>
              <span className="text-sm">{t('pricing.plans.vip.bullet6')}</span>
            </div>
            <div className="flex items-center">
              <span className="text-purple-500 mr-2">✓</span>
              <span className="text-sm">{t('pricing.plans.vip.bullet7')}</span>
            </div>
          </div>
          
          <Link href="https://app.ambassy.io/login" passHref>
            <button className="mt-6 bg-yellow-500 text-black py-3 rounded-md hover:bg-yellow-400 transition-colors w-full">
              {t('common.getStarted')}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}