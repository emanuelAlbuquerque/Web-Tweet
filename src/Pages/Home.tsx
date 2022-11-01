import { useState } from 'react'
import '../styles/global.css'
import { Tweet } from '../components/Tweet/Tweet';
import { SlideMenu } from '../components/SlideMenu/SlideMenu';
import { Profile } from '../components/Profile/Profile';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { News } from '../components/News/News';
import { Follows } from '../components/Follows/Follows';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { IconHeader } from '../components/Header/IconHeader';
import { Post } from '../components/InputPost/Post';
import { CiSearch } from 'react-icons/ci';
import { ItemNews } from '../components/News/ItemNews';
import { ItemFollow } from '../components/Follows/ItemFollow';

export function Home(){
  return(
      <div className='w-full h-screen flex flex-col justify-between'>
        <div className='flex w-[90%] my-0 mx-auto justify-center py-3 h-[90%]'>
          <div className='w-[20%] h-[100%] flex flex-col justify-between mr-8 '>
            <SlideMenu />
            <Profile />
          </div>
          <div className='w-[40%] flex flex-col' >
            <Header.Root>
              <Header.Title>
                Home
              </Header.Title>
              <Header.Icon>
                <IconHeader />
              </Header.Icon>
            </Header.Root>
            <Post />
            <div className='w-full h-[10px] bg-dark-8'></div>
            <div className='overflow-y-auto scrollbar-thin scrollbar-thumb-dark-6 scrollbar-track-dark-7 pr-4'>
              <Tweet name='Emanuel' ahoba='@emanuel' mensagem='Finalizando a tela de tweeter' />
              <Tweet name='Emanuel' ahoba='@emanuel' mensagem='Finalizando a tela de tweeter' />
            </div>
          </div>
          <div className='w-[30%] overflow-y-auto ml-16 scrollbar-thin scrollbar-thumb-dark-6 scrollbar-track-dark-7 pr-4'>
            <SearchBar.Root className='mb-4'>
              <SearchBar.Icon>
                <CiSearch size={20} />
              </SearchBar.Icon>
              <SearchBar.Input placeholder='Search Twitter' />
            </SearchBar.Root>
            <News className='mb-4'>
              <ItemNews
                hastag='#hashtag'
                noticia='Title lasdh asldh lsad sladj aslkd laksjdklasj djas lkdjas ldkja slkdj aslkdasl dlkasdlads'
                tema='US news'
                horario='Last night'
              // isDark={true}
              />
              <ItemNews
                hastag='#hashtag'
                noticia='Title lasdh asldh lsad sladj aslkd laksjdklasj djas lkdjas ldkja slkdj aslkdasl dlkasdlads'
                tema='US news'
                horario='Last night'
              // isDark={true}
              />
              <ItemNews
                hastag='#hashtag'
                noticia='Title lasdh asldh lsad sladj aslkd laksjdklasj djas lkdjas ldkja slkdj aslkdasl dlkasdlads'
                tema='US news'
                horario='Last night'
              // isDark={true}
              />
            </News>
            <Follows>
              <ItemFollow
                name="Emanuel"
                email="@emanuel"
                isDark={false}
              />
              <ItemFollow
                name="Emanuel"
                email="@emanuel"
                isDark={false}
              />
              <ItemFollow
                name="Emanuel"
                email="@emanuel"
                isDark={false}
              />
            </Follows>
            <p className='font-500 text-dark-5 text-13'>Terms of Service Privacy Policy Cookie Policy
              Ads info More © 2021 Twitter, Inc.</p>
          </div>
        </div>
        <Footer />
      </div>
      ) 
    }

