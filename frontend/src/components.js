import React, { useState } from 'react';

// Sidebar Component
export const Sidebar = ({ 
  currentView, 
  setCurrentView, 
  setShowProfileModal, 
  setShowNotifications,
  darkMode,
  setDarkMode 
}) => {
  return (
    <div className="sidebar">
      {/* X Logo */}
      <div className="logo">
        <svg viewBox="0 0 24 24" className="logo-svg">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </div>
      
      {/* Navigation */}
      <nav className="nav">
        <div 
          className={`nav-item ${currentView === 'home' ? 'active' : ''}`}
          onClick={() => setCurrentView('home')}
        >
          <svg viewBox="0 0 24 24" className="nav-icon">
            <path d="M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z"/>
          </svg>
          <span>Home</span>
        </div>
        
        <div 
          className={`nav-item ${currentView === 'explore' ? 'active' : ''}`}
          onClick={() => setCurrentView('explore')}
        >
          <svg viewBox="0 0 24 24" className="nav-icon">
            <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"/>
          </svg>
          <span>Explore</span>
        </div>
        
        <div 
          className={`nav-item ${currentView === 'notifications' ? 'active' : ''}`}
          onClick={() => setCurrentView('notifications')}
        >
          <svg viewBox="0 0 24 24" className="nav-icon">
            <path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.234l-1.131-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"/>
          </svg>
          <span>Notifications</span>
        </div>
        
        <div 
          className="nav-item"
          onClick={() => setCurrentView('messages')}
        >
          <svg viewBox="0 0 24 24" className="nav-icon">
            <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.636V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"/>
          </svg>
          <span>Messages</span>
        </div>
        
        <div className="nav-item">
          <svg viewBox="0 0 24 24" className="nav-icon">
            <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"/>
          </svg>
          <span>Bookmarks</span>
        </div>
        
        <div className="nav-item">
          <svg viewBox="0 0 24 24" className="nav-icon">
            <path d="M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2z"/>
          </svg>
          <span>Lists</span>
        </div>
        
        <div 
          className="nav-item"
          onClick={() => setShowProfileModal(true)}
        >
          <svg viewBox="0 0 24 24" className="nav-icon">
            <path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"/>
          </svg>
          <span>Profile</span>
        </div>
        
        <div className="nav-item">
          <svg viewBox="0 0 24 24" className="nav-icon">
            <path d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 7.54c-.98 0-1.8.8-1.8 1.8s.82 1.8 1.8 1.8 1.8-.8 1.8-1.8-.82-1.8-1.8-1.8zm0-2c1.94 0 3.5 1.56 3.5 3.5S13.55 14.3 11.61 14.3 8.11 12.74 8.11 10.8s1.56-3.51 3.5-3.51z"/>
          </svg>
          <span>Settings</span>
        </div>
      </nav>
      
      {/* Tweet Button */}
      <button className="tweet-btn">
        Post
      </button>
      
      {/* Profile Section */}
      <div className="profile-section">
        <img 
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a" 
          alt="Profile" 
          className="profile-avatar"
        />
        <div className="profile-info">
          <div className="profile-name">Your Name</div>
          <div className="profile-username">@yourusername</div>
        </div>
        <div className="more-options">⋯</div>
      </div>
      
      {/* Dark Mode Toggle */}
      <button 
        className="dark-mode-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
    </div>
  );
};

// Tweet Composer Component
export const TweetComposer = ({ onTweet, newTweet, setNewTweet }) => {
  const [charCount, setCharCount] = useState(0);
  const maxChars = 280;
  
  const handleTweet = () => {
    onTweet(newTweet);
    setNewTweet('');
    setCharCount(0);
  };
  
  const handleInputChange = (e) => {
    const text = e.target.value;
    setNewTweet(text);
    setCharCount(text.length);
  };
  
  return (
    <div className="tweet-composer">
      <img 
        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face" 
        alt="Your avatar" 
        className="composer-avatar"
      />
      <div className="composer-content">
        <textarea
          value={newTweet}
          onChange={handleInputChange}
          placeholder="What's happening?"
          className="compose-textarea"
          maxLength={maxChars}
        />
        <div className="composer-actions">
          <div className="composer-tools">
            <button className="tool-btn">🖼️</button>
            <button className="tool-btn">📊</button>
            <button className="tool-btn">😊</button>
            <button className="tool-btn">📅</button>
            <button className="tool-btn">📍</button>
          </div>
          <div className="composer-submit">
            <div className={`char-count ${charCount > maxChars - 20 ? 'warning' : ''}`}>
              {charCount}/{maxChars}
            </div>
            <button 
              className={`post-btn ${newTweet.trim() ? 'active' : ''}`}
              onClick={handleTweet}
              disabled={!newTweet.trim() || charCount > maxChars}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Tweet Component
export const Tweet = ({ tweet, onLike, onRetweet }) => {
  const [liked, setLiked] = useState(false);
  const [retweeted, setRetweeted] = useState(false);
  
  const handleLike = () => {
    if (!liked) {
      onLike(tweet.id);
      setLiked(true);
    }
  };
  
  const handleRetweet = () => {
    if (!retweeted) {
      onRetweet(tweet.id);
      setRetweeted(true);
    }
  };
  
  return (
    <div className="tweet">
      <img 
        src={tweet.user.avatar} 
        alt={tweet.user.displayName} 
        className="tweet-avatar"
      />
      <div className="tweet-content">
        <div className="tweet-header">
          <span className="tweet-author">{tweet.user.displayName}</span>
          {tweet.user.verified && <span className="verified">✓</span>}
          <span className="tweet-username">@{tweet.user.username}</span>
          <span className="tweet-time">· {tweet.timestamp}</span>
        </div>
        
        <div className="tweet-text">{tweet.content}</div>
        
        {tweet.image && (
          <div className="tweet-media">
            <img src={tweet.image} alt="Tweet media" className="tweet-image" />
          </div>
        )}
        
        <div className="tweet-actions">
          <button className="action-btn">
            <svg viewBox="0 0 24 24" className="action-icon">
              <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z"/>
            </svg>
            <span>{tweet.replies}</span>
          </button>
          
          <button 
            className={`action-btn ${retweeted ? 'retweeted' : ''}`}
            onClick={handleRetweet}
          >
            <svg viewBox="0 0 24 24" className="action-icon">
              <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"/>
            </svg>
            <span>{tweet.retweets}</span>
          </button>
          
          <button 
            className={`action-btn ${liked ? 'liked' : ''}`}
            onClick={handleLike}
          >
            <svg viewBox="0 0 24 24" className="action-icon">
              <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"/>
            </svg>
            <span>{tweet.likes}</span>
          </button>
          
          <button className="action-btn">
            <svg viewBox="0 0 24 24" className="action-icon">
              <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.29 3.3-1.42-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"/>
            </svg>
          </button>
          
          <button className="action-btn">
            <svg viewBox="0 0 24 24" className="action-icon">
              <path d="M8.75 21V3h2v18l-2-18zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"/>
            </svg>
            <span>{tweet.views}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Right Sidebar Component
export const RightSidebar = ({ trends, suggestions }) => {
  return (
    <div className="right-sidebar">
      <div className="search-box">
        <svg viewBox="0 0 24 24" className="search-icon">
          <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"/>
        </svg>
        <input type="text" placeholder="Search" className="search-input" />
      </div>
      
      <TrendingTopics trends={trends} />
      
      <div className="suggestions-widget">
        <h3 className="widget-title">Who to follow</h3>
        {suggestions.map((user, index) => (
          <div key={index} className="suggestion-item">
            <img src={user.avatar} alt={user.displayName} className="suggestion-avatar" />
            <div className="suggestion-info">
              <div className="suggestion-name">
                {user.displayName}
                {user.verified && <span className="verified">✓</span>}
              </div>
              <div className="suggestion-username">@{user.username}</div>
              <div className="suggestion-bio">{user.bio}</div>
            </div>
            <button className="follow-btn">Follow</button>
          </div>
        ))}
        <div className="show-more">Show more</div>
      </div>
    </div>
  );
};

// Trending Topics Component
export const TrendingTopics = ({ trends }) => {
  return (
    <div className="trending-widget">
      <h3 className="widget-title">What's happening</h3>
      {trends.map((trend, index) => (
        <div key={index} className="trending-item">
          <div className="trending-category">Trending in Technology</div>
          <div className="trending-topic">{trend.name}</div>
          <div className="trending-count">{trend.tweets} posts</div>
        </div>
      ))}
      <div className="show-more">Show more</div>
    </div>
  );
};

// Main Content Component
export const MainContent = ({ children }) => {
  return (
    <div className="main-content">
      {children}
    </div>
  );
};

// Profile Modal Component
export const ProfileModal = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content profile-modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Profile</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        <div className="profile-details">
          <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a" 
            alt="Profile" 
            className="profile-large-avatar"
          />
          <h3>Your Name</h3>
          <p>@yourusername</p>
          <div className="profile-stats">
            <div><strong>123</strong> Following</div>
            <div><strong>456</strong> Followers</div>
          </div>
          <p className="profile-bio">Building amazing things with code ✨</p>
        </div>
      </div>
    </div>
  );
};

// Notification Modal Component
export const NotificationModal = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content notification-modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Notifications</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        <div className="notifications-list">
          <div className="notification-item">
            <div className="notification-icon">❤️</div>
            <div className="notification-content">
              <strong>TechGuru</strong> liked your post about AI innovation
            </div>
          </div>
          <div className="notification-item">
            <div className="notification-icon">🔄</div>
            <div className="notification-content">
              <strong>Sarah | Lifestyle</strong> retweeted your morning coffee post
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};