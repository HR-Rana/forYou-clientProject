import React from 'react'
import {TeamData} from '../../../assets/Data/TeamData/TeamData'
import TeamCard from './TeamCard/TeamCard'
import { Link } from 'react-router-dom';

export default function Team() {
 
 const sliceTeam = TeamData.slice(1, 5)
 

  return (
    <div className='team-section'>
      <div className="title">
        <h3>OUR TEAM</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe obcaecati officiis ad quidem pariatur, rerum autem ducimus exercitationem quaerat illo.</p>
      </div>
      <div className="team-memebers">
        {
          sliceTeam.map((items, index)=>{
            const {img, name, designation, id} = items;
            return <TeamCard  img={img} name={name} slice={true} designation={designation}  key={index} />
          })
        }
      </div>
      <p><Link to={'/Team-members'}>See More Team Members {'>>'}</Link></p>
    </div>
  )
}
