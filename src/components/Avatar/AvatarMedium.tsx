export interface AvatarMediumProps {
  img: string | undefined,
}

export function AvatarMedium(props: AvatarMediumProps) {
  return (
    <img src={props.img} alt="" className="w-[49px] h-[49px] rounded-full"/>
  )
}

