var emailData = "From: foo@bar.com#/#\nSubject: Nunc in justo eros. Aliquam.#/#\nDate: 07-27-2016#/#\nTo: foo@bar.com#/#\ Even if the valley is a good place, the author of the pain is always consequent. But the car is not in front of the door, the eu sometimes places the wise. The class is apt to be silent partners and to the shores through our marriages, through the hymenaean projects. Morbidity will follow and hatred of the life of life. Curabitur imperdiet orci fear, et dignissim nisl lacinia non. Aenean volutpat diam in lorem iaculis, sit amet volutpat nibh dictum. Quisque vel vulputate nisi. For a vestibulum turpis. Lorem ipsum dolor sit amet, sesectetur adipiscing elit. Morbi sometimes leo id velit id quet, at vestibulum ipsum molestie Tomorrow eu lobortis libero. I don't read it on the rutrum. I don't read it on the website. Some ex to place the great care of life. ##||##\n\nFrom: baz@foo.com#/#\nSubject: Aenean doesn't want to run arcu.#/#\nDate: 08-11-2016#/#\nTo: baz@foo.com#/#\nCras ex leo, faucibus that is soft, dignissim should be amet fear. , the author who is the master. Until he wants to be pure, he needs the urn of poison. He also needs a microphone. The door is not the door of the house of the poisoned lion. There is no lake, but the mass of the valley is like a dignissim euismod lake. Like a big bed. Morbi should be the hero of the arc. Tomorrow not before the bow. In fact, it is necessary to target the target at the time. It is the financing of the casino, or the need for the gate itself. Sed suscipit massa in neque lobortis congue.##||##\n\nFrom: qux@bar.com#/#\nSubject: Sed hendrerit felis in ex.#/#\nDate: 06-25-2016#/# \nTo: qux@bar.com#/#\nNo one who is in the medical field of the valley should be free. But football is easy. But Maecenas is a basketball urn. However, just as many members are expected, the pain of the valley needs homework. The industry will be pursued now. Morbi at tincidunt is ugly, it needs medical funding Curabitur laoreet ipsum a how easy, eu aquet lectus pullerra. Maecenas ullamcorper rutrum dui, ac aliquet mi pulvinar sit amet.##||##\n\nFrom: quux@foo.com#/#\nSubject: Curabitur tincidunt elit nec risus.#/#\nDate: 07-24- 2016#/#\nTo: quux@foo.com#/#\nIt will sometimes be followed up. There is nothing easy. Everyone but the land will be followed, the vestibule than but, Lacinia mauris. Now the laughter was painful, but there was no feugiat, but an element of time. A simple element of homework. Tomorrow God is free, the ferry needs vehicles, but who cares about arrows. The class is suitable for the silent partners who turn to the shores through our marriages, through the Hymenaean projects. There is no lacinia except, or the members of the Ligula borders. Maecenas vulputate, leo auctor venenatis pretium, lectus elit eleifend odio, nec molestie ligula ex eget tellus. There is no such thing as an element. Now it's not the life of the life of the target to decorate the smile. Complete the goals of the policy. It was said that he lived in this street.##||##\n\nFrom: garply@foo.com#/#\nSubject: Integer nec now facilisis, ultricies.#/#\nDate: 07-03-2016#/#\ nTo: garply@foo. com#/#\nBrown rice is fine, or it flatters the yeast but. I don't care about the makeup of the ultricies, nor the vehicles. There is always no one. Maecenas congue, leo nec feugiat dapibus, dui temus facilisis elit, no finnis leo nisl at est. Until the casino, the school does not have volleyball members, there is no place to put the ligula, and no eleifend as a fear as a torturer. But always the real estate. No and decorate the eros. But some of the children I have given, so that the result is not. Complete mourning for high school students, homework was on the property, vehicles on the ground. Children can set a price for children. He is said to have lived in this street.";

function mailCount(emailData) {
  let emails = emailData.split('##||##');
  
  let emailAndParts = {};
  for (let index = 0; index < emails.length; index++) {
    let parts = emails[index].split('#/#');
    emailAndParts.index = {
      sender: parts[0],
      subject: parts[1],
      date: parts[2].match(/[0-9][0-9]-[0-9][0-9]-[0-9]/).join(''),
      recipient: parts[3],
      body: parts[4],
    }
  }


  console.log(emailAndParts);
}

mailCount(emailData);

// console output

// Count of Email: 5
// Date Range: Sat Jun 25 2016 - Thu Aug 11 2016