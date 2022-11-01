import clsx from "clsx"
import { Link } from "react-router-dom"

export interface FooterProps{
  classe?: string
}

export function Footer(props: FooterProps){
  return(
    <footer className={clsx("bg-primary-blue px-4 py-1 w-full flex justify-between items-center", props.classe)}>
      {props.classe}
      <div className="text-white ml-36">
        <h2 className="text-22 font-700">Don't miss what's happening</h2>
        <p className="text-16">People on Twitter are the first to know</p>
      </div>
      <div className="font-700">
        <Link to='pageNotFound' className="bg-transparent text-white py-2 px-4 border-[1px] border-white rounded-3xl mr-3">Log in</Link>
        <Link to='pageNotFound' className="bg-white text-black py-2 px-4 rounded-3xl">Sing up</Link>
      </div>
    </footer>
  )
}