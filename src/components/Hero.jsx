export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div>
          <h1>
            نربط المحلات التجارية إلى
            <span>عالم التجارة الإلكترونية</span>
          </h1>
          <p>
            حلول لوجستية متكاملة تدعمها التقنية الحديثة لتطوير تجربة التجارة الإلكترونية
            في المملكة العربية المتحدة.
          </p>
          <div className="actions">
            <button className="btn outline">خدماتنا</button>
            <button className="btn white">تواصل معنا</button>
          </div>
        </div>

        <div className="card">
          <div className="line w80"></div>
          <div className="line w60"></div>
          <div className="line w70"></div>
        </div>
      </div>
    </section>
  );
}
