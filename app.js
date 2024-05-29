const app = Vue.createApp({
  // data, functions
  // template: "<h2>I am the template</h2>",
  data() {
    return {
      url: "https://www.google.com/",
      showBooks: true,
      //   title: "The final empire",
      //   author: "refi",
      //   year: "2021",
      //   x: 0,
      //   y: 0,
      books: [
        { title: "name of the wind", author: "patrick", image: "assets/1.jpg", isFav: true },
        { title: "the way of kings", author: "spongebob", image: "assets/2.jpg", isFav: false },
        { title: "who i am i", author: "squidword", image: "assets/3.jpg", isFav: true },
      ],
    };
  },
  methods: {
    // changeTitle(title) {
    //   //   this.title = 'Words of Radiance'
    //   this.title = title;},
    toggleShowbooks() {
      this.showBooks = !this.showBooks;
    },

    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },

    toggleFav(book) {
      book.isFav = !book.isFav;
    },
  },
  computed: {
    filterdBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");
