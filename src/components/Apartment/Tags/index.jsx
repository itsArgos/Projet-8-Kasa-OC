import "./tags.scss";

export function Tag({ tags }) {
  return (
    <div className="tags">
      {tags && tags.map((tag) => <p key={tag}>{tag}</p>)}
    </div>
  );
}
