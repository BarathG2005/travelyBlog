import React from 'react';
import './AboutMe.css';
import I1 from './asset/a1.webp'
import I2 from './asset/a2.jpg'
import I3 from './asset/a3.jpg'
import I4 from './asset/a4.jpg'

function AboutMe() {
  return (
    <div className='abt'>
    <section className="about-me">
      <h2>Welcome to My Travel Blog</h2>
      <p className="intro">
        Hey there! I’m Barath, an avid traveler with a passion for exploring the world one destination at a time. My journey began with a simple desire to see new places, meet new people, and experience the beauty our planet has to offer. Whether I’m hiking in the Himalayas, wandering through vibrant city streets, or simply relaxing on a remote beach, I’m always chasing that next adventure.
      </p>
      <p className="intro">
        In this blog, I’ll share my travel stories, tips, and experiences to inspire you to pack your bags and go on your own journey. From hidden gems in far-off places to practical advice on how to travel smarter, this space is all about celebrating the joys of travel and exploration.
      </p>
      
      <h3>My Travel Philosophy</h3>
      <p className="philosophy">
        I believe travel is more than just about visiting famous landmarks—it's about immersing yourself in new cultures, trying local foods, and finding moments of peace and awe in the most unexpected places. Whether it's a spontaneous weekend getaway or a months-long backpacking trip, the experiences we gather along the way are priceless.
      </p>
      <p className="philosophy">
        For me, travel is about stepping outside your comfort zone, meeting people from different walks of life, and learning something new with each journey. I aim to share this philosophy with you through my blog, helping you discover the world in a deeper, more meaningful way.
      </p>

      <h3>Featured Adventures</h3>
      <ul className="adventures">
        <li><strong>Everest Base Camp Trek - Nepal</strong><br />
          The Everest Base Camp trek is a dream for many, and it was no different for me. This 14-day journey through the rugged Himalayas is both physically demanding and spiritually uplifting. Along the way, I witnessed breathtaking views of the world’s highest peak, experienced the warmth of the Sherpa people, and connected with other adventurers from around the world. I’ll share my full experience with tips on how to prepare, what to pack, and how to make the most of your time in this majestic region.
        </li>
        <li><strong>Angel’s Landing Hike - Zion National Park, USA</strong><br />
          This iconic hike in Zion National Park is not for the faint of heart, but it’s absolutely worth the effort. The views from the top are some of the most stunning I’ve ever seen—an expansive desert landscape with deep canyons and towering cliffs. I'll walk you through the trail, including the difficult parts and how to stay safe on this adrenaline-pumping hike.
        </li>
        <li><strong>Tiger’s Nest Monastery - Bhutan</strong><br />
          Perched 3,120 meters above sea level on a cliffside in Bhutan, the Tiger’s Nest Monastery is an unforgettable sight. The hike to this sacred site is a physical challenge but the reward is worth every step. The monastery itself is a symbol of Bhutanese spirituality and offers unparalleled views of the Paro Valley. I’ll share the history, cultural significance, and the incredible experience of reaching this incredible destination.
        </li>
      </ul>

      <h3>Travel Tips & Advice</h3>
      <ul className="travel-tips">
        <li><strong>Budget Travel: How to Make the Most of Your Money</strong><br />
          Traveling on a budget doesn’t mean sacrificing experiences—it’s about being smart with your choices. I’ll give you tips on how to travel affordably without missing out on the best experiences. From finding cheap flights and accommodations to budgeting for activities, I’ll show you how to stretch your travel dollars further.
        </li>
        <li><strong>Solo Travel: Embrace the Adventure</strong><br />
          Solo travel has been one of the most transformative experiences of my life. It challenges you to step out of your comfort zone, be independent, and navigate unfamiliar environments. If you're considering traveling solo, I’ll share my top tips on staying safe, meeting people, and enjoying the freedom of exploring on your own.
        </li>
        <li><strong>Packing Essentials for Every Trip</strong><br />
          Packing for a trip can be overwhelming, but I’ve learned to streamline the process. Whether you’re heading to the mountains, the beach, or a bustling city, I’ve got packing tips that will help you keep your luggage light and organized.
        </li>
      </ul>

      <h3>Photo Diaries</h3>
      <p className="photo-diaries">
        One of the best ways to relive my travels is through photography. I’ve captured the beauty of each destination I visit, and I’ll be sharing my photo diaries right here. From stunning mountain landscapes to vibrant street scenes, you’ll get a glimpse into my adventures through the lens of my camera.
      </p>

      <h3>Join Me on This Journey</h3>
      <p className="join-journey">
        Traveling has taught me more than I could ever have imagined. I’ve discovered new perspectives, built friendships across continents, and experienced the beauty of life from different cultures. Through this blog, I want to inspire you to embark on your own adventure, whether it’s around the world or to the next town over.
      </p>
      <p className="join-journey">
        If you have any questions about my travels or need tips for planning your own journey, feel free to reach out! I’d love to hear from you.
      </p>
    </section>
    
    </div>
  );
}

export default AboutMe;
