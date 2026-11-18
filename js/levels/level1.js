// Level 1 placeholder so the engine can be tried before content is written.
window.Levels = window.Levels || [];
window.Levels[0] = { id: 1, title: 'Cryo Deck', intro: 'Cold light. A dead door. Somewhere, a voice is trying to start.',
  hotspots: [
    { id: 'look', label: 'Look around', text: 'Frost on the pods. One console blinks.', xp: 5 },
    { id: 'door', label: 'Open the door', needFlag: 'power_on', exit: true } ] };
