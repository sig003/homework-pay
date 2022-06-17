interface ChildrenProps {
  children: ReactNode;
}

export default function Layout({ children }: ChildrenProps) {
  return (
    <>
      <div>Top</div>
      <div>{children}</div>
      <div>Bottom</div>
    </>
  );
}
