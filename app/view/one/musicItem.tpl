<div class="music-list-item">
    <div class="music-list-tag">- <span>音乐</span> -</div>
    <div class="music-list-item-title">
        <p>{{ musicItem.title }}</p>
        <p class="music-list-item-title__desc">{{ musicItem.share_list.wx.desc | getAuthor }}</p>
    </div>
    <div class="music-list-item-cover">
        <div class="music-list-item-cover-background"></div>
        <div class="music-list-item-cover-img">
            <img src="{{ musicItem.img_url }}" alt="" class="music-list-item-img">
        </div>
        <img src="http://image.wufazhuce.com/play_btn_empty.png" alt="" class="music-list-item-play-btn">
        <img src="http://image.wufazhuce.com/music_copyright_1.png" width="100%" class="music-list-item-platform-icon">
    </div>
    <div class="music-list-item-content">
        <p class="music-list-item-music__desc">{{ musicItem.author.user_name }} | {{ musicItem.subtitle }}</p>
        <p class="music-list-item-content-title">{{ musicItem.forward }}</p>
        <p class="music-list-item-content-date">{{ musicItem.post_date | formatDate }}</p>
    </div>
</div>