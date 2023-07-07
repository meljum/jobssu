

import Link from "next/link"
import Review from "./review/Review"
export default function Home() {
  return (
    <>
     <h1>Melis</h1> 
     <Link href={"/Mel"} >Melis</Link>
     <Review />
    </>
  )
}
