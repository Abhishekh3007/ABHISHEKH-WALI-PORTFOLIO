export function BrandWordmark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1700 300"
      fill="none"
      {...props}
    >
      <text
        x="850"
        y="220"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="700"
        fontSize="200"
      >
        Abhishek Wali
      </text>
    </svg>
  );
}

export function getWordmarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1700 300"><text x="850" y="220" text-anchor="middle" fill="${color}" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="200">Abhishek Wali</text></svg>`;
}

