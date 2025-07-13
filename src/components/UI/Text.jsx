/**
 * @file Text.jsx
 * @description A reusable text component that supports light/dark theme and multiple variants.
 */

/**
 * Text component for rendering various text variants with dark mode support.
 *
 * @param {Object} props
 * @param {"heading"|"h2"|"h3"|"h4"|"p"|"span"} props.variant - The HTML tag to render.
 * @param {string} props.content - The text content to display.
 * @param {string} [props.className] - Optional Tailwind classes for extra styling.
 * @returns {JSX.Element}
 */
export const Text = ({ variant = "p", content, className = "" }) => {
  const baseClass = "text-black transition-colors duration-300";

  const variantClasses = {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-semibold",
    h3: "text-2xl font-medium",
    h4: "text-xl font-medium",
    p: "text-base",
    span: "text-sm",
  };

  const Tag = variant in variantClasses ? variant : "p";

  return (
    <Tag className={`${baseClass} ${variantClasses[Tag]} ${className}`}>
      {content}
    </Tag>
  );
};
