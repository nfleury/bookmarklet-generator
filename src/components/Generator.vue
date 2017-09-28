<template>
  <div class="ui container">
  
      <h1 class="ui header separator">Bookmarklet Generator</h1>

      <div class="ui grid">
        <div class="nine wide column">
          <div class="ui form ">
              <div class="ui field">
                  <label>Bookmarklet name</label>
                  <input v-model="name" />
              </div>
              <div class="ui field">
                  <label>Script</label>
                  <textarea v-model="script" ></textarea>
              </div>
              <div class="ui field">
                  <label>Load External Scripts</label>
                  <small>Add the javascript library url you want to include (https is recommended)</small>
                  <input v-model="externalScript" />
                  <br><br>
                  <button class="ui mini blue button right floated" @click="addScript()">[+] Add script</button>
                  <ul>
                      <li v-for="(s,i) in externalScripts"><a :href="s"> {{s}} </a><a style="color:red;cursor:pointer;" class="remove" @click="removeScript(i)"><small>[x] Remove</small></a></li>
                  </ul>                
              </div>

          </div>


        </div>
        <div class="seven wide column">
          <div class="ui form ">
              <div class="ui field">
                  <label>Result</label>
                  <span>Drag this link to your bookmarks bar: </span><a class="ui large green button" :href="'javascript: '+bScript">{{name}}</a>
                  <br><br>
                  <textarea v-model="bScript" disabled></textarea>
              </div>
          </div>

        </div>
      </div>      
        
        
  </div>
</template>

<script>
export default {
  name: 'generator',
  data () {
    return {
      name: 'My Bookmarklet',
      script: '',
      url: '',
      bScript: '',
      externalScript: '',
      externalScripts: ['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js']
    }
  },
  methods: {
    addScript () {
      this.externalScripts.push(this.externalScript)
      this.externalScript = ''
    },
    removeScript (i) {
      this.externalScripts.splice(i, 1)
    },
    generate () {
      var initScriptUrl = 'https://rawgit.com/nfleury/bookmarklet-generator/master/static/bookmarklet-init.js'
      var configString = JSON.stringify({script: this.script, urls: this.externalScripts})
      this.bScript = encodeURIComponent('var BOOKMARKLET_CONFIG = ' + configString + ';var s = document.createElement("script");s.type = "text/javascript";s.src="' + initScriptUrl + '";document.body.appendChild(s);')
    }
  },
  mounted () {
    this.generate()
  },
  watch: {
    externalScripts () {
      this.generate()
    },
    script () {
      this.generate()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
 
</style>