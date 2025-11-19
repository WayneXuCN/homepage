import React from 'react';
import HeaderBar from './HeaderBar.jsx';
import Hero from './Hero.jsx';
import SocialLink from './SocialLink.jsx';

const Contact = ({ content }) => {
  const { header, contact, footer } = content;
  const { hero, cards, form, services } = contact;

  return (
    <div className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
      <HeaderBar header={header} />

      <Hero subtitle={hero.subtitle} title={hero.title} description={hero.description} />

      <section className="mb-12 sm:mb-16 md:mb-20 grid md:grid-cols-2 gap-8">
        <div className="p-6 border border-gray-200 rounded-3xl card-hover">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-2">{cards.email.subtitle}</p>
          <a href={`mailto:${cards.email.address}`} className="text-2xl font-semibold underline">
            {cards.email.address}
          </a>
          <p className="text-sm text-gray-500 mt-3">{cards.email.note}</p>
        </div>
        <div className="p-6 border border-gray-200 rounded-3xl card-hover">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-2">{cards.social.subtitle}</p>
          <ul className="space-y-2 text-gray-700">
            {cards.social.items.map((item) => (
              <li key={item.label}>
                <a className="underline" href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-12 sm:mb-16 md:mb-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gray-400">{form.subtitle}</p>
            <h2 className="text-3xl font-semibold display-font">{form.title}</h2>
          </div>
          <span
            className="text-sm text-gray-400"
            dangerouslySetInnerHTML={{ __html: form.note }}
          ></span>
        </div>
        <form className="bg-gray-50 border border-gray-200 rounded-3xl p-8 space-y-6" name="contact" netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">
              称呼
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="例如：李雷 / 小团队 / 品牌方"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
              邮箱
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="topic" className="block text-sm font-medium text-gray-600 mb-2">
              项目类型
            </label>
            <select
              id="topic"
              name="topic"
              className="w-full border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="consulting">产品 / 体验咨询</option>
              <option value="content">内容共创</option>
              <option value="mdfriday">MDFriday 相关</option>
              <option value="other">其他想法</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-2">
              简要说明
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="目标、时间、你期待的成果..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded-2xl font-semibold text-lg card-hover"
          >
            发送给 Wenjie
          </button>
        </form>
      </section>

      <section className="mb-12 sm:mb-16 md:mb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {services.items.map((item) => (
            <article key={item.title} className="p-6 border border-gray-200 rounded-3xl card-hover">
              <p className="text-xs text-gray-400 uppercase tracking-[0.4em] mb-2">{item.subtitle}</p>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="pt-12 sm:pt-16 pb-6 sm:pb-8 border-t border-gray-200">
        <div className="flex justify-between items-center flex-col md:flex-row gap-6 md:gap-0">
          <p className="text-gray-600 text-base sm:text-lg text-center md:text-left">{footer.copyright}</p>
          <div className="flex space-x-4 sm:space-x-6">
            {footer.socialLinks.map((link) => (
              <SocialLink key={link.url} link={link} />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
