import * as React from "react"
import Gitalk from 'gatsby-plugin-gitalk'
import '@suziwen/gitalk/dist/gitalk.css'

const MyGitTalk = ({ post }) => {
  let gitalkConfig = {
    id: post.slug || post.id,
    title: post.title,
  }
  return (
    <Gitalk options={gitalkConfig} />
  )
}

export default MyGitTalk