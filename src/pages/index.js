// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
// import List from './components/list_plain'
import RecipeList from './qcomps/recipes'
import MenuBar from './qcomps/menuBar'
import Gallery from './qcomps/state';
import PersonData from './components/stateObj';
import Form from './qcomps/stuckForm';
import FeedbackForm from './qcomps/thankYouCrash';

export default function Home() {
  return (
    <div className={styles.main}>
        {/* <Profile /> */}
        {/* <List /> */}
        {/* <RecipeList />
        <MenuBar /> */}
        {/* <Gallery /> */}
        <PersonData />
        <Form />
        <FeedbackForm />
    </div>
  )
}
