import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../utils/Firebase'

const GetProjects = () => {
  const [projects, setProjects] = useState([])
  const getProjects = async () => {
    const querySnapshot = await getDocs(collection(db, 'projects'))
    const projects = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    setProjects(projects)
  }

  useEffect(() => {
    getProjects()
  }, [])

  return localStorage.setItem('projects', JSON.stringify(projects))
}

export default GetProjects
