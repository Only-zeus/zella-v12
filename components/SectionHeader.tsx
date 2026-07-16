type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  gradientText?: string;
  centered?: boolean;
  className?: string;
};
 
export default function SectionHeader({
  eyebrow,
  title,
  description,
  gradientText,
  centered = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <header
      className={`section-heading ${centered ? "section-heading-centered" : ""} ${className}`.trim()}
    >
      <div>
        <span className="small-label">{eyebrow}</span>
 
        <h2 className="section-title">
          {title}
          {gradientText ? (
            <span className="gradient-text"> {gradientText}</span>
          ) : null}
        </h2>
      </div>
 
      {description ? <p>{description}</p> : null}
    </header>
  );
}