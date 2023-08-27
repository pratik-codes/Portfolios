import { TalkData } from "@/utils/data"

import TalkDetails from "../talk-details"

const GenericsInTypescriptPage = () => {
  const talkData = TalkData.find(
    (item) =>
      item.title ===
      "Generics in Typescript. Build powerfull abstraction with typescript and say goodbye to any."
  )
  return (
    <div>
      <TalkDetails talkData={talkData} />
    </div>
  )
}

export default GenericsInTypescriptPage
