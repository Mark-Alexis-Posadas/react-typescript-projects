interface Type {
  link: string;
}
export default function SourceCode({ link }: Type) {
  return (
    <a href={link} className="mt-10 underline dark:text-white" target="_blank">
      Source code
    </a>
  );
}
