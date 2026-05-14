import Image from "next/image";

interface ArticleImageProps {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  // "hero"    — full-width article header (max 1200px wide, 600px tall)
  // "inline"  — within article body (max 672px wide, variable height)
  // "thumb"   — article card thumbnail (384×216, 16:9)
  variant?: "hero" | "inline" | "thumb";
}

const variants = {
  hero: {
    width: 1200,
    height: 600,
    className: "w-full rounded-[4px] object-cover",
    wrapperClassName: "w-full aspect-[2/1] relative overflow-hidden rounded-[4px] bg-[#f3f3f5] mb-12",
  },
  inline: {
    width: 672,
    height: 400,
    className: "w-full rounded-[4px] object-cover",
    wrapperClassName: "w-full aspect-[5/3] relative overflow-hidden rounded-[4px] bg-[#f3f3f5] my-10",
  },
  thumb: {
    width: 384,
    height: 216,
    className: "w-full h-full object-cover",
    wrapperClassName: "w-full aspect-video relative overflow-hidden rounded-[4px] bg-[#f3f3f5]",
  },
};

export default function ArticleImage({
  src,
  alt,
  caption,
  priority = false,
  variant = "inline",
}: ArticleImageProps) {
  const v = variants[variant];

  return (
    <figure className="not-prose">
      <div className={v.wrapperClassName}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={
            variant === "thumb"
              ? "(max-width: 768px) 100vw, 384px"
              : "(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          }
          className={v.className}
          priority={priority}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2YzZjNmNSIvPjwvc3ZnPg=="
        />
      </div>
      {caption && (
        <figcaption className="mt-3 label-mono text-[#86868b] text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
