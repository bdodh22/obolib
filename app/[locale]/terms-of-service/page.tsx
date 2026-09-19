import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FileText, ArrowLeft, ShieldAlert, CheckCircle2, Scale, HelpCircle } from 'lucide-react';
import { getInstrumentConfig } from '@/src/config/instrument.config';
import { ALL_LOCALES, Locale, getHreflangAlternates, getLocalizedPath } from '@/lib/i18n/config';

interface PageProps {
  params: { locale: string };
}

export function generateStaticParams() {
  return ALL_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = params.locale as Locale;
  if (!ALL_LOCALES.includes(locale)) return {};

  const config = getInstrumentConfig();
  const alternates = getHreflangAlternates('/terms-of-service', locale);

  const titles: Record<Locale, string> = {
    en: 'Terms of Service: User Agreement & Disclaimer | OboLib',
    zh: '服务条款: 用户协议与声学免责声明 | OboLib',
    de: 'Nutzungsbedingungen & Haftungsausschluss | OboLib',
    ja: '利用規約: 免責事項とユーザー同意書 | OboLib',
  };

  const descriptions: Record<Locale, string> = {
    en: 'Terms of service governing the usage of OboLib.com. Outlines academic acoustic modeling disclaimers, intellectual property, and knife safety.',
    zh: 'OboLib 双簧管数字化平台服务条款。明晰声学建模调音参考说明、自制哨片刮刀物理操作免责声明与版权知识产权准则。',
    de: 'Allgemeine Nutzungsbedingungen für OboLib.com. Richtlinien zur Nutzung von Grifftabellen, Stimmgeräten und Haftungsausschluss für Rohrbauwerkzeuge.',
    ja: 'OboLib の公式利用規約。音響ツールの参考利用、リード自作における刃物取り扱いの免責事項、著作権ポリシーを定めます。',
  };

  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;

  return {
    title,
    description,
    alternates,
    openGraph: {
      title,
      description,
      url: alternates.canonical,
      siteName: config.brandName,
      type: 'article',
    },
  };
}

export default function TermsOfServicePage({ params }: PageProps) {
  const locale = params.locale as Locale;
  if (!ALL_LOCALES.includes(locale)) {
    notFound();
  }

  const isZh = locale === 'zh';
  const isDe = locale === 'de';
  const isJa = locale === 'ja';

  const config = getInstrumentConfig();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: isZh ? 'OboLib 服务条款' : 'OboLib Terms of Service',
    description: 'Terms of service and user agreement for OboLib.com.',
    author: {
      '@type': 'Organization',
      name: config.brandName,
    },
    url: `${config.baseUrl}${getLocalizedPath('/terms-of-service', locale)}`,
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top backlink */}
      <div className="flex items-center justify-between">
        <Link
          href={getLocalizedPath('/', locale)}
          className="inline-flex items-center gap-2 text-xs font-bold text-teal-700 hover:text-teal-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isZh ? '返回首页' : 'Back to Home'}</span>
        </Link>

        <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full shrink-0 whitespace-nowrap">
          Standard Terms of Service
        </span>
      </div>

      {/* Header with Single H1 */}
      <div className="space-y-3 border-b border-slate-200 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider shrink-0 whitespace-nowrap">
          <Scale className="w-3.5 h-3.5 text-teal-600 shrink-0" />
          <span>Fair Use &amp; Professional Disclaimers</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          {isZh
            ? '服务条款与声学免责声明'
            : isDe
            ? 'Nutzungsbedingungen & Haftungsausschluss'
            : isJa
            ? '利用規約・免責事項'
            : 'Terms of Service & Disclaimers'}
        </h1>
        <p className="text-xs text-slate-400 font-mono">
          Last Updated: September 19, 2026 · Official Legal Document
        </p>
      </div>

      {/* Terms Content Sections */}
      <div className="space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
            <FileText className="w-4 h-4 text-teal-600 shrink-0" />
            <span>{isZh ? '1. 接受本条款' : '1. Acceptance of Terms'}</span>
          </h2>
          <p>
            {isZh
              ? '欢迎访问 OboLib.com（以下简称“本平台”）。通过访问、浏览或使用本站提供的指法图、调音台、哨片诊断及乐谱资料，即代表您已阅读并无条件同意接受本服务条款的所有内容。'
              : 'By accessing or utilizing OboLib.com services, fingering charts, acoustic tuners, and reed diagnostics, you affirm that you have reviewed and agree to be bound by these Terms of Service.'}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
            <span>{isZh ? '2. 声学调音与物理刮刀安全免责' : '2. Acoustic Guidance & Tool Safety Disclaimer'}</span>
          </h2>
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2 text-amber-950">
            <p className="font-bold">
              {isZh ? '⚠️ 乐器修整与刮削刀具操作安全提醒：' : '⚠️ Tool & Scraping Safety Notice:'}
            </p>
            <p>
              {isZh
                ? '本平台所有指法推荐、声学调音建议及“哨片诊断室”模拟处方均基于学术理论与统计声学模型，仅供日常练琴参考。使用高碳钢专业刮刀（如 Landwell, Vitry）削竹片属于高度精细且存在锐器划伤风险的物理操作，请乐手务必佩戴护指垫。因操作不当造成的乐器损伤或人身划伤，本平台不承担间接连带法律责任。'
                : 'All fingering tables and reed scraping guides are engineered for pedagogical and rehearsal reference. Scraping oboe reeds involves razor-sharp tools; always exercise extreme caution and proper finger guards. OboLib disclaims liability for instrument damage or physical injury resulting from reedmaking activities.'}
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
            <Scale className="w-4 h-4 text-teal-600 shrink-0" />
            <span>{isZh ? '3. 知识产权与合理使用' : '3. Intellectual Property & Fair Use'}</span>
          </h2>
          <p>
            {isZh
              ? '本站原创设计的 SVG 矢量双簧管指法键位图、声学谐波合成代码算法、哨片逆光透光渲染模型及文章专著，均受国际版权公约保护。允许用于个人练琴、教学示范或学术引用（需注明来源出处），未经书面许可禁止用于恶意批量爬取、商业反编译或镜像站打包售卖。'
              : 'Original SVG visualizer assets, Web Audio synthesis algorithms, and monographs published on OboLib are protected by international copyright laws. Non-commercial personal practice and classroom teaching use are encouraged; unauthorized web scraping or commercial mirroring is prohibited.'}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-teal-600 shrink-0" />
            <span>{isZh ? '4. 条款修订与联络通道' : '4. Modifications & Inquiries'}</span>
          </h2>
          <p>
            {isZh
              ? '我们保留根据法律法规变动或服务升级随时修订本条款的权利。修订版本一旦发布即刻生效。如有疑问，请通过官方邮箱联系我们：admin@obolib.com，我们承诺 24 小时内回复。'
              : 'We reserve the right to revise these terms to align with legal updates or product developments. Continued use constitutes acceptance. For inquiries, email admin@obolib.com with our 24-hour response guarantee.'}
          </p>
        </section>
      </div>
    </div>
  );
}
