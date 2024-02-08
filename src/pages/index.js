// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
//import Profile from './components/profile'
// import Profile from './qcomps/profile_mistake'
import MyFirstComp from './qcomps/firstcomp'
import Bio from './qcomps/bios'
import TodoList from './qcomps/todos'
import Profile from './components/profile_props'
import Gallery from './qcomps/gallery_props'
import Holder from './components/square'
import PackingList from './qcomps/props_item'

export default function Home() {
  return (
    <div className={styles.main}>
        {/* <Profile /> */}
        {/* <MyFirstComp />
        <Bio />
        <TodoList /> */}
        {/* <Gallery /> */}
        <Holder />
        <PackingList />
    </div>
  )
}
