let Foot = React.createClass({
  render: function() {
    return (
      <footer>
        <p newclass="subscribeToUs">Subscribe to Our Mailing List</p>
        <button newclass="subscribe">Subscribe</button>
        <a href="https://www.yelp.com/biz/win-son-brooklyn-4">
          <img newclass="yelp" src="/..Assets/yelp.png" />
        </a>
        <a href="https://www.instagram.com/explore/locations/1020770799/win-son/?hl=en">
          <img newclass="instagram" src="/..Assets/ig.png" />
        </a>
        <a href="https://www.facebook.com/pages/Win-Son/196863394276454">
          <img newclass="facebook" src="/..Assets/fb.png" />
        </a>
        <p classname="copyWright">© 2018 Win Son Restaurant</p>
      </footer>
    );
  }
});
