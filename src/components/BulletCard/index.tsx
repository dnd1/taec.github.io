const BulletCard: React.FC<{ title: string; subtitle?: string }> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="border border-amber-200 p-4 rounded glow:border-indigo-600">
      <h3 className="xs:text-md sm:text-xl md:text-3xl">
        <span className="pr-4 text-2xl">&#x2713;</span>
        {title}
      </h3>
      {subtitle && <h2>{subtitle}</h2>}
    </div>
  );
};

export default BulletCard;
