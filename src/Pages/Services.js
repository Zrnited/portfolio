import React from 'react'
import ServicesRendered from '../components/ServicesRendered'
import iconEdit from '../Assets/iconEdit.svg'

// const data = [{}]

const Services = () => {
  return (
    <div>
        <ServicesRendered pix={iconEdit}  text={'Training'} smallText={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque laudantium, nam veniam enim ad quos natus, sequi odit in culpa repellat minima eum exercitationem similique, pariatur quia sed facilis? Quas cumque, neque quaerat aliquam excepturi accusamus impedit voluptate non fugiat vel rem, fuga nemo ut magnam? Deleniti officiis cumque numquam.'}/>

        <ServicesRendered pix={iconEdit}  text={'Training'} smallText={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque laudantium, nam veniam enim ad quos natus, sequi odit in culpa repellat minima eum exercitationem similique, pariatur quia sed facilis? Quas cumque, neque quaerat aliquam excepturi accusamus impedit voluptate non fugiat vel rem, fuga nemo ut magnam? Deleniti officiis cumque numquam.'}/>
    </div>
  )
}

export default Services