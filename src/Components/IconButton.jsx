export default function IconButton({
  img,
  text = "Reply",
  className = "text-ModerateBlue",
}) {
  return (
    <div className="flex  gap-2">
      <img src={img} alt="" className="object-contain" />
      <p className={`${className} text-base font-bold`}>{text}</p>
    </div>
  );
}
