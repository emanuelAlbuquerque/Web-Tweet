export interface AvatarSmallProps{
  img: string
}

export function AvatarSmall(props: AvatarSmallProps) {
  return (
    <img src={props.img} alt="" className="w-[40px] h-[40px] rounded-full"/>
  )
}