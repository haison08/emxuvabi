# 💕 PLAN: Website Tình Yêu — emxuvabi
## "Nhật Ký Tình Yêu Của Xù & Bi"

> **Tên dự án**: emxuvabi
> **Tên miền**: emxuvabi.vercel.app
> **Concept**: Một cuốn nhật ký tình yêu kỹ thuật số — không phải web công nghiệp, mà là một bức thư tình sống động, mỗi khi scroll xuống là mở ra một trang mới của câu chuyện hai đứa.

---

## 📋 THÔNG TIN CƠ BẢN

| Thông tin | Giá trị |
|-----------|---------|
| Tên anh | **Bi** (Hải Sơn) |
| Tên em | **Xù** (Thục Linh) |
| Ngày yêu nhau | **29/12/2025** |
| Biệt danh couple | **Xù & Bi** |
| Tone màu | Hồng pastel + trắng kem + vàng nhạt vintage |
| Nhạc nền | Có — nhạc nhẹ nhàng, acoustic/piano |
| Số ảnh | 10 ảnh |
| Tech stack | HTML + CSS + Vanilla JS (single page, static) |
| Deploy | GitHub → Vercel (tên: emxuvabi) |

---

## 🎨 CONCEPT THIẾT KẾ — "Cuốn Nhật Ký Film"

### Ý tưởng chủ đạo
Website được thiết kế như một **cuốn nhật ký tình yêu chụp trên film** — lấy cảm hứng từ aesthetic film Kodak/Fuji với viền ảnh polaroid, texture giấy cũ, và typography viết tay. Mỗi section là một "trang nhật ký" mà người xem lật qua bằng cách scroll.

### Tại sao concept này?
- Nhiều ảnh của Xù & Bi đã có sẵn tone film rất đẹp (ảnh tốt nghiệp, ảnh nắm tay, ảnh hôn bên hoa giấy...)
- Cảm giác vintage, handmade, **KHÔNG** giống web công nghiệp AI sinh ra
- Ấm áp, cá nhân, và đầy cảm xúc

---

## 🎨 HỆ THỐNG THIẾT KẾ (DESIGN SYSTEM)

### Bảng màu (Color Palette)
```
Primary:        #F4A0B5  (hồng pastel — màu chủ đạo)
Primary Light:  #FDDDE6  (hồng nhạt — background sections)
Secondary:      #FFF8F0  (trắng kem — background chính)
Accent:         #E8967C  (cam đào — accent, nút bấm)
Accent Gold:    #D4A574  (vàng đồng nhạt — viền polaroid, chi tiết)
Text Dark:      #5C3D2E  (nâu socola — text chính)
Text Light:     #8B6F5E  (nâu nhạt — text phụ, caption)
Overlay:        rgba(244, 160, 181, 0.08)  (overlay hồng nhẹ trên ảnh)
```

### Typography
```css
/* Font chính — cho heading, tạo cảm giác viết tay/editorial */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Dancing+Script:wght@400;700&family=Quicksand:wght@300;400;500;600&display=swap');

/* Heading lớn (tên couple, section title): */
font-family: 'Dancing Script', cursive;

/* Heading phụ (ngày tháng, milestone): */
font-family: 'Playfair Display', serif;

/* Body text (mô tả, caption): */
font-family: 'Quicksand', sans-serif;
```

### Background & Texture (QUAN TRỌNG — KHÔNG dùng AI)

**Nguồn background THẬT, chất lượng cao, miễn phí:**

1. **Texture giấy cũ / craft paper** (cho cảm giác nhật ký):
   - Unsplash: search `"old paper texture"`, `"craft paper background"`, `"vintage paper cream"`
   - URL gợi ý: `https://images.unsplash.com/photo-1558618666-fcd25c85f82e` (giấy cũ vintage)

2. **Background hoa pastel** (cho hero section):
   - Unsplash: search `"pastel pink flowers soft"`, `"pink peony soft focus"`
   - Pexels: search `"soft pink floral background"`
   - URL gợi ý: `https://images.unsplash.com/photo-1490750967868-88aa4f44baee` (hoa hồng nhạt mờ)

3. **Texture vải linen / fabric** (cho một số section):
   - Unsplash: search `"linen texture cream"`, `"fabric soft beige"`

4. **Bokeh / ánh sáng mờ** (cho section đêm / lễ hội):
   - Unsplash: search `"warm bokeh lights"`, `"fairy lights bokeh"`
   - URL gợi ý: `https://images.unsplash.com/photo-1513151233558-d860c5398176` (bokeh ấm)

5. **Watercolor wash** (dùng làm divider giữa sections):
   - Unsplash: search `"watercolor pink wash texture"`
   - Freepik: search `"watercolor splash pastel pink free"`

> **LƯU Ý QUAN TRỌNG**: Tất cả background phải lấy từ Unsplash/Pexels (ảnh thật, chụp thật). TUYỆT ĐỐI KHÔNG dùng ảnh AI-generated. Nếu cần tạo texture, dùng CSS gradient nhẹ nhàng kết hợp với ảnh thật.

---

## 🏗️ CẤU TRÚC WEBSITE — 8 SECTIONS

Website là một trang duy nhất (single page), scroll dọc, mỗi section là một "trang nhật ký":

### SECTION 0: Loading Screen (Màn hình chờ)
- **Mô tả**: Một animation nhẹ nhàng khi mở web — chữ "Xù & Bi" viết bằng font Dancing Script, hiện ra từ từ như đang được viết tay, kèm hiệu ứng trái tim nhỏ bay lên.
- **Thời gian**: 2-3 giây rồi fade out
- **Background**: Màu #FFF8F0 (trắng kem)
- **Chi tiết kỹ thuật**:
  - Dùng CSS `stroke-dashoffset` animation cho hiệu ứng chữ viết tay (SVG text path)
  - Hoặc đơn giản hơn: text fade-in từng chữ với `@keyframes`
  - Sau khi animation xong, loading screen `opacity: 0` và `pointer-events: none`

---

### SECTION 1: Hero — "Câu Chuyện Của Chúng Mình"
- **Layout**: Full viewport height (100vh)
- **Background**: Ảnh hoa pastel (lấy từ Unsplash) với overlay gradient hồng mờ nhẹ
- **Nội dung**:
  - Dòng chữ lớn phía trên: `"Xù & Bi"` (font Dancing Script, cỡ 5rem, màu #5C3D2E)
  - Bên dưới: `"Câu chuyện tình yêu của chúng mình"` (font Playfair Display italic, cỡ 1.3rem)
  - Bên dưới nữa: `"Từ 29.12.2025"` (font Quicksand, cỡ 1rem, màu #8B6F5E)
  - Một mũi tên scroll xuống nhẹ nhàng bounce animation
- **Animation**:
  - Cánh hoa rơi (falling petals) — dùng CSS keyframes, tạo 15-20 phần tử `.petal` với position absolute, mỗi cánh có `animation-delay` và `animation-duration` khác nhau để trông tự nhiên
  - Cánh hoa là hình elip nhỏ xoay, màu hồng nhạt (#FDDDE6) với opacity 0.4-0.7
  - Parallax nhẹ: background ảnh hoa di chuyển chậm hơn khi scroll
- **Ảnh dùng**: Không dùng ảnh couple ở đây — chỉ dùng background hoa/texture

---

### SECTION 2: Bộ Đếm Tình Yêu — "Yêu Nhau Được..."
- **Layout**: Centered, chiều cao tự động
- **Background**: Texture giấy craft/linen nhẹ
- **Nội dung**:
  - Tiêu đề: `"Yêu nhau đã được..."` (Dancing Script)
  - **Bộ đếm realtime** hiển thị: `X năm, X tháng, X ngày, X giờ, X phút, X giây`
    - Tính từ ngày **29/12/2025** đến hiện tại
    - Số chạy realtime bằng JavaScript `setInterval` mỗi 1 giây
    - Mỗi đơn vị (năm, tháng, ngày...) nằm trong một "thẻ" nhỏ style polaroid
    - Font số: Playfair Display Bold, cỡ lớn
    - Font label: Quicksand Light, cỡ nhỏ bên dưới
  - Bên dưới bộ đếm: `"...và sẽ còn mãi mãi 💕"` (Quicksand italic)
- **Animation**:
  - Các thẻ số fade-in khi scroll vào view (Intersection Observer)
  - Số giây nhấp nháy nhẹ (pulse animation) để thể hiện thời gian đang trôi
- **CSS đặc biệt**:
  - Mỗi thẻ số có `box-shadow` nhẹ, `border-radius: 12px`, background trắng kem
  - Border dưới mỗi thẻ là một dải gradient hồng mỏng

---

### SECTION 3: Timeline — "Hành Trình Của Chúng Mình"
- **Layout**: Timeline dọc ở giữa trang, các milestone xen kẽ trái-phải
- **Background**: Trắng kem (#FFF8F0) với những chấm polka dot hồng nhạt rất mờ (CSS radial-gradient)
- **Nội dung — Các milestone (mỗi milestone là một "trang nhật ký")**:

  **Milestone 1**: 📅 29/12/2025 — "Ngày chúng mình bắt đầu"
  - Caption: "Ngày mà anh (Bi) chính thức có em (Xù), ngày đẹp nhất 💕"
  - Không kèm ảnh — chỉ text + icon trái tim

  **Milestone 2**: 🎓 "Ngày tốt nghiệp"
  - Caption: "Cùng nhau bước qua một chương mới, em luôn ở bên anh"
  - **Ảnh kèm**: Ảnh tốt nghiệp đứng cùng nhau cầm hoa (ảnh 2) — hiển thị trong khung polaroid
  
  **Milestone 3**: 💋 "Khoảnh khắc ngọt ngào"
  - Caption: "Giữa những bó hoa và tình yêu, mọi thứ đều hoàn hảo"
  - **Ảnh kèm**: Ảnh hôn má trong lễ tốt nghiệp (ảnh 3) — khung polaroid nghiêng nhẹ

  **Milestone 4**: 🌸 "Dưới tán hoa giấy"
  - Caption: "Có nụ hôn nào đẹp hơn nụ hôn dưới tán hoa giấy hồng?"
  - **Ảnh kèm**: Ảnh hôn bên cây hoa giấy (ảnh 6) — đây là ảnh đẹp nhất, hiển thị lớn hơn

  **Milestone 5**: 🏫 "Nắm tay ở hành lang"
  - Caption: "Chỉ cần nắm tay nhau, mọi thứ đều ổn thôi"
  - **Ảnh kèm**: Ảnh nắm tay ở lan can trường (ảnh 4) — khung vintage film

  (NOTE: Bạn có thể tùy chỉnh thêm/bớt milestone và caption theo ý mình)

- **Animation**:
  - Mỗi milestone fade-in + slide-in (từ trái hoặc phải) khi scroll vào view
  - Timeline line ở giữa "vẽ" dần từ trên xuống khi scroll (dùng CSS `scaleY` animation triggered by Intersection Observer)
  - Ảnh polaroid có hiệu ứng tilt nhẹ khi hover (CSS transform rotate 2-3deg)

- **CSS đặc biệt cho khung ảnh Polaroid**:
  ```css
  .polaroid {
    background: white;
    padding: 12px 12px 40px 12px;
    box-shadow: 0 4px 20px rgba(92, 61, 46, 0.15);
    transform: rotate(-2deg); /* mỗi ảnh xoay khác nhau */
    transition: transform 0.3s ease;
  }
  .polaroid:hover {
    transform: rotate(0deg) scale(1.02);
  }
  .polaroid-caption {
    font-family: 'Dancing Script', cursive;
    color: #8B6F5E;
    text-align: center;
    margin-top: 8px;
  }
  ```

---

### SECTION 4: Gallery — "Bộ Sưu Tập Kỷ Niệm"
- **Layout**: Masonry grid hoặc bento grid layout — các ảnh có kích thước khác nhau xếp tự nhiên như dán ảnh lên tường
- **Background**: Texture giấy kraft nâu nhạt (lấy từ Unsplash search "kraft paper texture")
- **Nội dung**:
  - Tiêu đề: `"Kỷ niệm của chúng mình 📸"` (Dancing Script)
  - Hiển thị TẤT CẢ 10 ảnh trong các khung polaroid/instant film
  - Mỗi ảnh có caption nhỏ bên dưới (font Dancing Script)
  - Các ảnh xếp hơi nghiêng, chồng lên nhau một chút — giống dán sticker lên nhật ký

- **Sắp xếp ảnh (mapping tên file → vị trí)**:
  
  | Vị trí | File ảnh | Caption gợi ý | Kích thước |
  |--------|----------|---------------|------------|
  | 1 (lớn) | `...c066b857...jpg` (selfie gỗ) | "mặt xấu nhưng dễ thương 😝" | Lớn |
  | 2 (lớn) | `...28b6e547...jpg` (tốt nghiệp hoa) | "ngày anh tốt nghiệp 🎓" | Lớn |
  | 3 (rất lớn) | `...de4e0aa3...jpg` (hôn tốt nghiệp) | "khoảnh khắc ngọt ngào nhất 💋" | Rất lớn |
  | 4 (vừa) | `...8339f298...jpg` (nắm tay) | "nắm tay anh đi 🤝" | Vừa |
  | 5 (nhỏ) | `...d3b29900...jpg` (lễ hội đêm) | "đêm hội cùng nhau ✨" | Nhỏ |
  | 6 (lớn) | `...239806d4...jpg` (hôn hoa giấy) | "dưới tán hoa giấy 🌸" | Lớn |
  | 7 (vừa) | `...2bde0968...jpg` (video call) | "xa nhau nhưng vẫn gần 📱" | Vừa |
  | 8 (nhỏ) | `...6db4a65c...jpg` (lock screen) | "luôn ở trên màn hình anh 🔒" | Nhỏ |
  | 9 (vừa) | `...c4a28d90...jpg` (filter vui) | "couple quậy nhất 🤪" | Vừa |
  | 10 (vừa) | `...139486cb...jpg` (nhà hàng) | "đi ăn là vui nhất 🍜" | Vừa |

- **Animation**:
  - Ảnh fade-in lần lượt (staggered animation) khi scroll vào view
  - Mỗi ảnh delay 0.1s so với ảnh trước
  - Hover: ảnh nhấc lên nhẹ (`translateY(-8px)`) + shadow đậm hơn + nhẹ nhàng rotate về 0deg
  
- **Lightbox (popup xem ảnh lớn)**:
  - Click vào ảnh → mở lightbox full screen với background blur
  - Có nút X để đóng, hoặc click ngoài để đóng
  - Dùng Vanilla JS, KHÔNG dùng thư viện ngoài

---

### SECTION 5: Love Letter — "Lời Muốn Nói"
- **Layout**: Centered, max-width 600px
- **Background**: Ảnh texture giấy viết tay vintage (Unsplash: "letter paper vintage")
- **Nội dung**:
  - Một "bức thư tình" từ Bi gửi Xù, viết trên nền giống giấy thật
  - Style: giấy có dòng kẻ nhạt, viền hơi cong, shadow giống tờ giấy đặt trên bàn
  - Font: Dancing Script cho phần thân thư
  - Nội dung thư (Bi tự viết lại sau — để placeholder):
    ```
    Gửi Xù yêu dấu,

    Em biết không, từ ngày có em...
    [BI TỰ VIẾT THÊM NỘI DUNG THƯ TÌNH Ở ĐÂY]
    
    Yêu em nhiều lắm,
    Bi của em 💕
    ```
  - Bên dưới thư: hai dấu môi hôn nhỏ (emoji hoặc CSS shape)
  
- **Animation**:
  - Thư "mở ra" khi scroll vào — hiệu ứng giấy unfold (CSS transform perspective + rotateX)
  - Hoặc đơn giản hơn: fade-in + slide-up nhẹ nhàng
  - Chữ hiện ra từng dòng (typewriter effect nhẹ)

---

### SECTION 6: "Điều Anh Yêu Ở Em" (Reasons I Love You)
- **Layout**: Các "sticky note" / giấy nhớ nhỏ rải trên nền
- **Background**: Nền bảng gỗ (Unsplash: "wooden board texture warm") hoặc nền cork board
- **Nội dung**:
  - Tiêu đề: `"Những điều anh yêu ở em 💝"` (Dancing Script)
  - 6-8 tấm "sticky note" với các lý do yêu, mỗi tấm:
    - Background pastel khác nhau (hồng, vàng nhạt, xanh mint nhạt, tím lavender nhạt)
    - Font Quicksand
    - Xoay nhẹ random (-5deg đến 5deg)
    - Có "ghim" hoặc "băng keo washi tape" CSS ở góc trên
  - Nội dung gợi ý cho sticky notes (Bi tự sửa lại):
    1. "Yêu nụ cười của em 😊"
    2. "Yêu cái cách em phụng phịu 😤"
    3. "Yêu lúc em đeo kính tròn cute lắm 🤓"
    4. "Yêu mỗi cuộc gọi video với em 📱"
    5. "Yêu em trong tấm áo trắng 🤍"
    6. "Yêu cái cách em luôn ở bên anh 💕"
  
- **Animation**:
  - Sticky notes "dán" vào bảng lần lượt — scale từ 0 → 1 + rotate nhẹ
  - Hover: nhấc lên + shadow đậm hơn, giống nhấc giấy nhớ lên
  - Mỗi note delay animation 0.15s

---

### SECTION 7: Nhạc Nền — "Bài Hát Của Chúng Mình"
- **Layout**: Floating music player (fixed position, góc dưới phải)
- **KHÔNG phải một section riêng** — mà là một component luôn hiện trên màn hình
- **Thiết kế**:
  - Nút play/pause hình tròn, icon ♪, background hồng pastel
  - Khi click → expand ra mini player với:
    - Tên bài hát (Bi tự chọn — để placeholder "Our Song")
    - Thanh progress bar mỏng
    - Nút play/pause
  - Khi thu gọn: chỉ hiện nút tròn nhỏ với animation pulse nhẹ
- **Nhạc**:
  - Dùng file MP3 embed trực tiếp (Bi tự thêm file nhạc vào project)
  - Hoặc dùng một bản piano/acoustic nhẹ nhàng không bản quyền
  - **KHÔNG tự động phát** — người dùng phải bấm play (UX tốt hơn)
  - Gợi ý nguồn nhạc free: 
    - Pixabay Music (pixabay.com/music) — search "romantic piano", "acoustic love"
    - Free Music Archive

---

### SECTION 8: Footer — "Mãi Mãi Bên Nhau"
- **Layout**: Centered, chiều cao vừa phải
- **Background**: Gradient từ trắng kem xuống hồng nhạt
- **Nội dung**:
  - `"Xù & Bi — Mãi mãi bên nhau 💕"` (Dancing Script, cỡ lớn)
  - `"29.12.2025 → ♾️"` (Playfair Display)
  - Một trái tim đập (CSS animation pulse) ở giữa
  - Dòng nhỏ: `"Made with 💕 by Bi for Xù"` (Quicksand, cỡ nhỏ)
- **Animation**:
  - Trái tim CSS scale lên xuống (heartbeat animation)
  - Confetti rơi nhẹ khi scroll đến footer (optional — dùng JS canvas nhẹ)

---

## ✨ ANIMATION & HIỆU ỨNG ĐẶC BIỆT

### 1. Falling Petals (Cánh Hoa Rơi)
- Xuất hiện ở hero section
- 15-20 phần tử `.petal` absolute position
- Mỗi cánh: width 8-15px, height 10-20px, border-radius ellipse
- Màu: hồng pastel với opacity 0.3-0.6
- Animation: `@keyframes fall` — top từ -5vh đến 105vh, kèm translateX lắc qua lại và rotate
- Mỗi cánh có `animation-duration` random (5-12s) và `animation-delay` khác nhau

### 2. Scroll Reveal (Hiện khi scroll)
- Dùng Intersection Observer API (Vanilla JS)
- Mỗi element có class `.reveal` — ban đầu `opacity: 0` và `translateY(30px)`
- Khi vào viewport: thêm class `.revealed` → `opacity: 1`, `translateY(0)`, `transition: 0.8s ease`
- Staggered delay cho các group items (gallery ảnh, sticky notes...)

### 3. Parallax Nhẹ
- Background hero section di chuyển chậm hơn khi scroll
- Dùng CSS `background-attachment: fixed` hoặc JS scroll event với `transform: translateY(scrollY * 0.3)`
- CHỈ áp dụng cho 1-2 section, không lạm dụng

### 4. Cursor Tùy Chỉnh (Optional)
- Cursor mặc định → thay bằng hình trái tim nhỏ (CSS `cursor: url(...)`)
- Hoặc: trail effect — khi di chuột, để lại dấu trái tim nhỏ fade out

### 5. Hiệu Ứng Ảnh Film
- Tất cả ảnh có CSS filter nhẹ để đồng nhất tone:
  ```css
  .photo {
    filter: contrast(1.05) saturate(0.9) brightness(1.02) sepia(0.08);
  }
  ```
- Ảnh trong khung polaroid có border trắng + shadow mềm
- Một số ảnh có "tape" (băng keo) CSS ở góc

---

## 📁 CẤU TRÚC THƯ MỤC

```
emxuvabi/
├── index.html              ← Trang web chính (single page)
├── style.css               ← Toàn bộ CSS
├── script.js               ← JavaScript (counter, scroll reveal, lightbox, music player)
├── PLAN.md                 ← File plan này
├── assets/
│   ├── images/
│   │   ├── photos/         ← 10 ảnh couple (rename cho dễ quản lý)
│   │   │   ├── 01-selfie-cute.jpg
│   │   │   ├── 02-graduation-bouquet.jpg
│   │   │   ├── 03-graduation-kiss.jpg
│   │   │   ├── 04-holding-hands.jpg
│   │   │   ├── 05-festival-night.jpg
│   │   │   ├── 06-bougainvillea-kiss.jpg
│   │   │   ├── 07-video-call.jpg
│   │   │   ├── 08-lockscreen.jpg
│   │   │   ├── 09-funny-filter.jpg
│   │   │   └── 10-restaurant.jpg
│   │   └── backgrounds/    ← Background textures (download từ Unsplash/Pexels)
│   │       ├── paper-texture.jpg
│   │       ├── floral-hero.jpg
│   │       ├── kraft-paper.jpg
│   │       ├── wood-board.jpg
│   │       └── bokeh-warm.jpg
│   └── music/
│       └── our-song.mp3    ← File nhạc nền (Bi tự thêm)
└── favicon.ico             ← Icon tab trình duyệt (emoji trái tim)
```

### Mapping tên file ảnh gốc → tên mới:
| Tên gốc (rút gọn) | Tên mới | Mô tả |
|---------------------|---------|-------|
| `...c066b857...jpg` | `01-selfie-cute.jpg` | Selfie hai đứa trước tường gỗ |
| `...28b6e547...jpg` | `02-graduation-bouquet.jpg` | Tốt nghiệp cầm hoa |
| `...de4e0aa3...jpg` | `03-graduation-kiss.jpg` | Hôn nhau lễ tốt nghiệp |
| `...8339f298...jpg` | `04-holding-hands.jpg` | Nắm tay hành lang trường |
| `...d3b29900...jpg` | `05-festival-night.jpg` | Lễ hội đêm |
| `...239806d4...jpg` | `06-bougainvillea-kiss.jpg` | Hôn bên hoa giấy hồng |
| `...2bde0968...jpg` | `07-video-call.jpg` | Gọi video cute |
| `...6db4a65c...jpg` | `08-lockscreen.jpg` | Màn hình khóa polaroid |
| `...c4a28d90...jpg` | `09-funny-filter.jpg` | Filter vui nhộn |
| `...139486cb...jpg` | `10-restaurant.jpg` | Đi ăn cùng nhau |

---

## 📱 RESPONSIVE DESIGN

- **Desktop (>1024px)**: Layout đầy đủ, gallery 3-4 cột, timeline trái-phải
- **Tablet (768-1024px)**: Gallery 2-3 cột, timeline center
- **Mobile (<768px)**: 
  - Gallery 1-2 cột
  - Timeline một bên (không xen kẽ)
  - Font size giảm nhẹ
  - Sticky notes xếp dọc
  - Music player nhỏ gọn hơn

---

## 🚀 DEPLOYMENT — GITHUB + VERCEL

### Bước 1: Tạo GitHub Repository
```bash
# Trong thư mục project
git init
git add .
git commit -m "💕 Initial commit: emxuvabi love website"
git branch -M main
git remote add origin https://github.com/[USERNAME]/emxuvabi.git
git push -u origin main
```

### Bước 2: Deploy lên Vercel
1. Truy cập [vercel.com](https://vercel.com) → đăng nhập bằng GitHub
2. Click **"Add New Project"**
3. Import repository **emxuvabi** từ GitHub
4. Vercel sẽ tự detect đây là static site
5. **Project Name**: đặt là `emxuvabi`
6. Click **Deploy**
7. Website sẽ live tại: **https://emxuvabi.vercel.app**

### Bước 3: Custom Domain (Optional)
- Nếu muốn tên miền riêng (ví dụ: xuvabi.love), mua domain và trỏ DNS về Vercel

---

## 📝 GHI CHÚ QUAN TRỌNG CHO GEMINI KHI THỰC HIỆN

### ⚠️ Những điều BẮT BUỘC phải làm:
1. **Background PHẢI lấy từ Unsplash/Pexels** — ảnh thật, không dùng ảnh AI. Tìm trên Unsplash với các từ khóa đã gợi ý ở trên, lấy URL trực tiếp.
2. **Ảnh couple để trong thư mục `assets/images/photos/`** — rename theo bảng mapping ở trên.
3. **KHÔNG dùng bất kỳ framework/library nào** — chỉ HTML + CSS + Vanilla JS thuần.
4. **Website PHẢI đẹp** — đây là điều quan trọng nhất. Phải có cảm giác ấm áp, handmade, vintage film. KHÔNG được trông như web công nghiệp.
5. **Responsive** — phải đẹp trên cả điện thoại và máy tính.
6. **Performance** — ảnh phải được optimize (lazy loading với `loading="lazy"`).
7. **Sau khi code xong** → tự push lên GitHub và deploy lên Vercel với tên `emxuvabi`.

### ❌ Những điều KHÔNG ĐƯỢC làm:
- Không dùng ảnh AI-generated cho background
- Không dùng TailwindCSS, Bootstrap, hay bất kỳ CSS framework nào
- Không tự động phát nhạc (phải có nút play)
- Không dùng design đơn giản, tối thiểu — phải thật đẹp và có hồn

### 💡 Gợi ý thêm:
- Dùng `will-change: transform` cho các element animation để tối ưu performance
- Dùng `loading="lazy"` cho tất cả ảnh
- Dùng `prefers-reduced-motion` media query để tắt animation cho người nhạy cảm
- Test trên mobile trước — đa số người xem sẽ mở trên điện thoại

---

## ❤️ TÓM TẮT

Đây là một website tình yêu được thiết kế như một cuốn nhật ký film vintage — ấm áp, cá nhân, và đầy cảm xúc. Mỗi section kể một phần câu chuyện của Xù & Bi, từ ngày đầu yêu nhau, qua những khoảnh khắc ngọt ngào, đến lời hứa mãi mãi.

**Không phải một trang web — mà là một bức thư tình.**

---

*Plan by Bi, for Xù 💕*
*29.12.2025 → ♾️*
