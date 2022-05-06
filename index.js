const baseUrl = "http://localhost:14099/api/TestSites"
Vue.createApp({
  data() {
      return {   
          posts: [],
          error: null,
          id:null,
          dataBook: {name: "", waitingTime: 0},
      }
  },
  async created() {
      console.log("created method called")
      this.helperGetPosts(baseUrl)
  },
  methods: {
      async helperGetPosts() {
          try {
              const response = await axios.get(baseUrl)
              this.posts = await response.data
              this.error = null
          } catch (ex) {
              alert(ex)
          }
      },
      async addData(){
        console.table(this.dataBook)
        try{
            response = await axios.post(baseUrl, this.dataBook)
            this.addMessage = "response" + response.status + "" + response.statusText
            this.created()
        } catch(ex) {
            alert(ex.message)

            function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";

  function openCity(cityName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(cityName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click(); }
        }
      }
  }
}).mount("#app")
