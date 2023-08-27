import { TalkData } from "@/utils/data"

import TalkDetails from "../talk-details"

const BuildingFrameworkyThings = () => {
  const talkData = TalkData.find(
    (talk) =>
      talk.title ===
      "Building frameworky things in react from scratch. SSR, file-based routing and server-side data fetching like next.js"
  )

  return (
    <div>
      <TalkDetails talkData={talkData} />
    </div>
  )
}

export default BuildingFrameworkyThings
