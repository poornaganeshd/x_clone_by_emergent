import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { 
  Sidebar, 
  MainContent, 
  RightSidebar, 
  TweetComposer, 
  Tweet, 
  TrendingTopics,
  ProfileModal,
  NotificationModal
} from './components';

// Mock data for tweets
const mockTweets = [
  {
    id: 1,
    user: {
      username: 'elonmusk',
      displayName: 'Elon Musk',
      avatar: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=150&h=150&fit=crop&crop=face',
      verified: true
    },
    content: 'Absolutely incredible work by Poorna! 🚀 This X clone is mind-blowing - the attention to detail and execution is phenomenal. When talent meets dedication, magic happens. Keep pushing boundaries! 💫 #Innovation #WebDev #Respect',
    timestamp: '1h',
    likes: 45672,
    retweets: 8934,
    replies: 2341,
    views: 234567
  },
  {
    id: 2,
    user: {
      username: 'TechGuru',
      displayName: 'Tech Guru',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
      verified: true
    },
    content: 'Just shipped a new AI feature that will change everything! The future of tech is here 🚀 #AI #TechInnovation',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop',
    timestamp: '2h',
    likes: 1247,
    retweets: 342,
    replies: 89,
    views: 12500
  },
  {
    id: 2,
    user: {
      username: 'lifestyle_sarah',
      displayName: 'Sarah | Lifestyle',
      avatar: 'https://images.unsplash.com/photo-1657128344786-360c3f8e57e5',
      verified: false
    },
    content: 'Morning coffee ritual ☕ Starting the day right with some mindfulness and gratitude. What does your morning look like?',
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    timestamp: '4h',
    likes: 523,
    retweets: 78,
    replies: 45,
    views: 3200
  },
  {
    id: 3,
    user: {
      username: 'devjohn',
      displayName: 'John Developer',
      avatar: 'https://images.unsplash.com/photo-1576558656222-ba66febe3dec',
      verified: true
    },
    content: 'Spent the weekend building this cool project with React and AI. The possibilities are endless when you combine creativity with code! 💻✨',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
    timestamp: '6h',
    likes: 892,
    retweets: 156,
    replies: 67,
    views: 5600
  },
  {
    id: 4,
    user: {
      username: 'wellness_maya',
      displayName: 'Maya Wellness',
      avatar: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846',
      verified: false
    },
    content: 'Daily reminder: Your mental health matters. Take breaks, breathe deeply, and be kind to yourself. 🧘‍♀️💚 #MentalHealthMatters',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773',
    timestamp: '8h',
    likes: 2156,
    retweets: 456,
    replies: 123,
    views: 8900
  },
  {
    id: 5,
    user: {
      username: 'socialmedia_pro',
      displayName: 'Social Media Pro',
      avatar: 'https://images.unsplash.com/photo-1527525443983-6e60c75fff46',
      verified: true
    },
    content: 'The evolution of social media platforms continues to amaze me. From simple text posts to immersive experiences. What\'s next? 📱🌐',
    image: 'https://images.unsplash.com/photo-1579869847557-1f67382cc158',
    timestamp: '12h',
    likes: 1834,
    retweets: 289,
    replies: 156,
    views: 7400
  }
];

const mockTrends = [
  { name: '#TechInnovation', tweets: '125K' },
  { name: '#AI2025', tweets: '89.2K' },
  { name: '#Coding', tweets: '67.8K' },
  { name: '#MentalHealthMatters', tweets: '45.6K' },
  { name: '#React', tweets: '34.2K' },
  { name: '#SocialMedia', tweets: '28.9K' },
  { name: '#Wellness', tweets: '23.1K' },
  { name: '#Innovation', tweets: '19.5K' }
];

const mockSuggestions = [
  {
    username: 'elonmusk',
    displayName: 'Elon Musk',
    avatar: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    verified: true,
    bio: 'CEO of Tesla, SpaceX, and X'
  },
  {
    username: 'coding_tips',
    displayName: 'Coding Tips',
    avatar: 'https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa',
    verified: false,
    bio: 'Daily coding tips and tricks'
  },
  {
    username: 'design_inspiration',
    displayName: 'Design Inspiration',
    avatar: 'https://images.unsplash.com/photo-1513171920216-2640b288471b',
    verified: true,
    bio: 'Beautiful design inspiration daily'
  }
];

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [tweets, setTweets] = useState(mockTweets);
  const [newTweet, setNewTweet] = useState('');

  useEffect(() => {
    // Apply dark mode class to body
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  const handleTweet = (content) => {
    if (content.trim()) {
      const tweet = {
        id: tweets.length + 1,
        user: {
          username: 'you',
          displayName: 'You',
          avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
          verified: false
        },
        content,
        timestamp: 'now',
        likes: 0,
        retweets: 0,
        replies: 0,
        views: 0
      };
      setTweets([tweet, ...tweets]);
      setNewTweet('');
    }
  };

  const handleLike = (tweetId) => {
    setTweets(tweets.map(tweet => 
      tweet.id === tweetId 
        ? { ...tweet, likes: tweet.likes + 1 }
        : tweet
    ));
  };

  const handleRetweet = (tweetId) => {
    setTweets(tweets.map(tweet => 
      tweet.id === tweetId 
        ? { ...tweet, retweets: tweet.retweets + 1 }
        : tweet
    ));
  };

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <BrowserRouter>
        <div className="app-container">
          <Sidebar 
            currentView={currentView}
            setCurrentView={setCurrentView}
            setShowProfileModal={setShowProfileModal}
            setShowNotifications={setShowNotifications}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
          
          <main className="main-content">
            <div className="main-header">
              <h1 className="page-title">
                {currentView === 'home' && 'Home'}
                {currentView === 'explore' && 'Explore'}
                {currentView === 'notifications' && 'Notifications'}
                {currentView === 'messages' && 'Messages'}
                {currentView === 'profile' && 'Profile'}
              </h1>
            </div>
            
            {currentView === 'home' && (
              <>
                <TweetComposer 
                  onTweet={handleTweet}
                  newTweet={newTweet}
                  setNewTweet={setNewTweet}
                />
                <div className="tweets-container">
                  {tweets.map(tweet => (
                    <Tweet 
                      key={tweet.id} 
                      tweet={tweet} 
                      onLike={handleLike}
                      onRetweet={handleRetweet}
                    />
                  ))}
                </div>
              </>
            )}
            
            {currentView === 'explore' && (
              <div className="explore-content">
                <div className="explore-header">
                  <input 
                    type="text" 
                    placeholder="Search X" 
                    className="search-input"
                  />
                </div>
                <TrendingTopics trends={mockTrends} />
              </div>
            )}
            
            {currentView === 'notifications' && (
              <div className="notifications-content">
                <div className="notification-item">
                  <div className="notification-icon">❤️</div>
                  <div className="notification-text">
                    <strong>TechGuru</strong> liked your post
                  </div>
                  <div className="notification-time">2h</div>
                </div>
                <div className="notification-item">
                  <div className="notification-icon">🔄</div>
                  <div className="notification-text">
                    <strong>Sarah | Lifestyle</strong> retweeted your post
                  </div>
                  <div className="notification-time">4h</div>
                </div>
              </div>
            )}
          </main>
          
          <RightSidebar 
            trends={mockTrends}
            suggestions={mockSuggestions}
          />
          
          {showProfileModal && (
            <ProfileModal onClose={() => setShowProfileModal(false)} />
          )}
          
          {showNotifications && (
            <NotificationModal onClose={() => setShowNotifications(false)} />
          )}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;