<template>
  <div class="container">
    <section id="typography" class="section">
      <h1 class="title">
        Typography
      </h1>
      <hr>
      <div class="columns">
        <div class="column">
          <h1 class="title is-1">
            Title 1
          </h1>
          <h2 class="title is-2">
            Title 2
          </h2>
          <h3 class="title is-3">
            Title 3
          </h3>
          <h4 class="title is-4">
            Title 4
          </h4>
          <h5 class="title is-5">
            Title 5
          </h5>
          <h6 class="title is-6">
            Title 6
          </h6>
        </div>
        <div class="column">
          <h1 class="subtitle is-1">
            Subtitle 1
          </h1>
          <h2 class="subtitle is-2">
            Subtitle 2
          </h2>
          <h3 class="subtitle is-3">
            Subtitle 3
          </h3>
          <h4 class="subtitle is-4">
            Subtitle 4
          </h4>
          <h5 class="subtitle is-5">
            Subtitle 5
          </h5>
          <h6 class="subtitle is-6">
            Subtitle 6
          </h6>
        </div>
        <div class="column">
          <h1 class="title">
            Title
          </h1>
          <h2 class="subtitle">
            Subtitle
          </h2>
          <p class="title is-1">
            Title 1
          </p>
          <p class="subtitle is-3">
            Subtitle 3
          </p>
          <p class="title is-2">
            Title 2
          </p>
          <p class="subtitle is-4">
            Subtitle 4
          </p>
          <p class="title is-3">
            Title 3
          </p>
          <p class="subtitle is-5">
            Subtitle 5
          </p>
        </div>
      </div>
    </section>

    <section id="box" class="section">
      <h1 class="title">
        Box
      </h1>
      <hr>
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img alt="Image" src="https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong> John Smith </strong> <small> @johnsmith </small> <small> 31m </small>
                <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
              </p>
            </div>
            <nav class="level">
              <div class="level-left">
                <a class="level-item">
                  <span class="icon is-small"> <i class="fa fa-reply" /> </span>
                </a>
                <a class="level-item">
                  <span class="icon is-small"> <i class="fa fa-retweet" /> </span>
                </a>
                <a class="level-item">
                  <span class="icon is-small"> <i class="fa fa-heart" /> </span>
                </a>
              </div>
            </nav>
          </div>
        </article>
      </div>
    </section>

    <section id="button" class="section">
      <h1 class="title">
        Button
      </h1>
      <hr>
      <div class="columns">
        <div class="column">
          <div class="buttons">
            <a class="button"> Button </a>
            <a class="button is-yellow"> Yellow </a>
            <a class="button is-orange"> Orange </a>
            <a class="button is-red"> Red </a>
            <a class="button is-beet"> Beet </a>
            <a class="button is-fuchsia"> Fuchsia </a>
            <a class="button is-text"> Fuchsia </a>
          </div>
          <div class="buttons">
            <a class="button is-primary"> Primary </a>
            <a class="button is-info"> Info </a>
            <a class="button is-success"> Success </a>
            <a class="button is-warning"> Warning </a>
            <a class="button is-danger"> Danger </a>
          </div>
          <div class="buttons">
            <a class="button is-focused"> Focus </a>
            <a class="button is-primary is-focused"> Focus </a>
            <a class="button is-yellow is-focused"> Focus </a>
            <a class="button is-orange is-focused"> Focus </a>
            <a class="button is-red is-focused"> Focus </a>
            <a class="button is-beet is-focused"> Focus </a>
            <a class="button is-fuchsia is-focused"> Focus </a>
            <a class="button is-text is-focused"> Focus </a>
          </div>
          <div class="buttons">
            <a class="button is-hovered"> Hover </a>
            <a class="button is-primary is-hovered"> Hover </a>
            <a class="button is-yellow is-hovered"> Hover </a>
            <a class="button is-orange is-hovered"> Hover </a>
            <a class="button is-red is-hovered"> Hover </a>
            <a class="button is-beet is-hovered"> Hover </a>
            <a class="button is-fuchsia is-hovered"> Hover </a>
            <a class="button is-text is-hovered"> Hover </a>
          </div>
          <div class="buttons">
            <a class="button is-active"> Active </a>
            <a class="button is-primary is-active"> Active </a>
            <a class="button is-yellow is-active"> Active </a>
            <a class="button is-orange is-active"> Active </a>
            <a class="button is-red is-active"> Active </a>
            <a class="button is-beet is-active"> Active </a>
            <a class="button is-fuchsia is-active"> Active </a>
            <a class="button is-text is-active"> Active </a>
          </div>
          <div class="buttons">
            <a class="button is-loading"> Loading </a>
            <a class="button is-primary is-loading"> Loading </a>
            <a class="button is-yellow is-loading"> Loading </a>
            <a class="button is-orange is-loading"> Loading </a>
            <a class="button is-red is-loading"> Loading </a>
            <a class="button is-beet is-loading"> Loading </a>
            <a class="button is-fuchsia is-loading"> Loading </a>
            <a class="button is-text is-loading"> Loading </a>
          </div>
          <p class="field">
            <a class="button">
              <span class="icon is-small">
                <i class="fa fa-bold" />
              </span>
            </a>
            <a class="button">
              <span class="icon is-small">
                <i class="fa fa-italic" />
              </span>
            </a>
            <a class="button">
              <span class="icon is-small">
                <i class="fa fa-underline" />
              </span>
            </a>
            <a class="button">
              <span class="icon">
                <i class="fab fa-github" />
              </span>
              <span> GitHub </span>
            </a>
            <a class="button is-primary">
              <span class="icon">
                <i class="fab fa-twitter" />
              </span>
              <span> Twitter </span>
            </a>
            <a class="button is-success">
              <span class="icon is-small">
                <i class="fa fa-check" />
              </span>
              <span> Save </span>
            </a>
            <a class="button is-danger is-outlined">
              <span> Delete </span>
              <span class="icon is-small">
                <i class="fa fa-times" />
              </span>
            </a>
          </p>
          <div class="field has-addons">
            <p class="control">
              <a class="button">
                <span class="icon is-small">
                  <i class="fa fa-bold" />
                </span>
                <span>Bold</span>
              </a>
            </p>
            <p class="control">
              <a class="button">
                <span class="icon is-small">
                  <i class="fa fa-italic" />
                </span>
                <span>Italic</span>
              </a>
            </p>
            <p class="control">
              <a class="button">
                <span class="icon is-small">
                  <i class="fa fa-underline" />
                </span>
                <span>Underline</span>
              </a>
            </p>
          </div>

          <div class="field has-addons">
            <p class="control">
              <a class="button">
                <span class="icon is-small">
                  <i class="fa fa-align-left" />
                </span>
                <span>Left</span>
              </a>
            </p>
            <p class="control">
              <a class="button">
                <span class="icon is-small">
                  <i class="fa fa-align-center" />
                </span>
                <span>Center</span>
              </a>
            </p>
            <p class="control">
              <a class="button">
                <span class="icon is-small">
                  <i class="fa fa-align-right" />
                </span>
                <span>Right</span>
              </a>
            </p>
          </div>
          <div class="buttons">
            <a class="button is-rounded">Rounded</a>
            <a class="button is-primary is-rounded">Rounded</a>
            <a class="button is-fuchsia is-rounded">Rounded</a>
            <a class="button is-info is-rounded">Rounded</a>
            <a class="button is-success is-rounded">Rounded</a>
            <a class="button is-danger is-rounded">Rounded</a>
          </div>
        </div>
        <div class="column">
          <div class="buttons">
            <a class="button is-small"> Small </a>
            <a class="button"> Normal </a>
            <a class="button is-medium"> Medium </a>
            <a class="button is-large"> Large </a>
          </div>
          <div class="buttons">
            <a class="button is-outlined"> Outlined </a>
            <a class="button is-primary is-outlined"> Outlined </a>
            <a class="button is-yellow is-outlined"> Outlined </a>
            <a class="button is-orange is-outlined"> Outlined </a>
            <a class="button is-red is-outlined"> Outlined </a>
            <a class="button is-beet is-outlined"> Outlined </a>
            <a class="button is-fuchsia is-outlined"> Outlined </a>
          </div>
          <div class="buttons notification is-primary">
            <a class="button is-primary is-inverted is-outlined"> Invert Outlined </a>
            <a class="button is-yellow is-inverted is-outlined"> Invert Outlined </a>
            <a class="button is-orange is-inverted is-outlined"> Invert Outlined </a>
            <a class="button is-red is-inverted is-outlined"> Invert Outlined </a>
            <a class="button is-beet is-inverted is-outlined"> Invert Outlined </a>
            <a class="button is-fuchsia is-inverted is-outlined"> Invert Outlined </a>
          </div>
          <div class="buttons notification is-primary">
            <a class="button is-primary is-inverted"> Inverted </a>
            <a class="button is-yellow is-inverted"> Inverted </a>
            <a class="button is-orange is-inverted"> Inverted </a>
            <a class="button is-red is-inverted"> Inverted </a>
            <a class="button is-beet is-inverted"> Inverted </a>
            <a class="button is-fuchsia is-inverted"> Inverted </a>
          </div>
          <p class="buttons">
            <a class="button is-small">
              <span class="icon is-small">
                <i class="fab fa-github" />
              </span>
              <span> GitHub </span>
            </a>
            <a class="button">
              <span class="icon">
                <i class="fab fa-github" />
              </span>
              <span> GitHub </span>
            </a>
            <a class="button is-medium">
              <span class="icon">
                <i class="fab fa-github" />
              </span>
              <span> GitHub </span>
            </a>
            <a class="button is-large">
              <span class="icon is-medium">
                <i class="fab fa-github" />
              </span>
              <span> GitHub </span>
            </a>
          </p>
          <p class="field">
            <a class="button is-small">
              <span class="icon is-small">
                <i class="fa fa-heading" />
              </span>
            </a>
          </p>
          <p class="field">
            <a class="button">
              <span class="icon is-small">
                <i class="fa fa-heading" />
              </span>
            </a>
            <a class="button">
              <span class="icon">
                <i class="fa fa-heading fa-lg" />
              </span>
            </a>
          </p>
          <p class="field">
            <a class="button is-medium">
              <span class="icon is-small">
                <i class="fa fa-heading" />
              </span>
            </a>
            <a class="button is-medium">
              <span class="icon">
                <i class="fa fa-heading fa-lg" />
              </span>
            </a>
            <a class="button is-medium">
              <span class="icon is-medium">
                <i class="fa fa-heading fa-2x" />
              </span>
            </a>
          </p>
          <p class="field">
            <a class="button is-large">
              <span class="icon is-small">
                <i class="fa fa-heading" />
              </span>
            </a>
            <a class="button is-large">
              <span class="icon is-medium">
                <i class="fa fa-heading fa-lg" />
              </span>
            </a>
            <a class="button is-large">
              <span class="icon is-large">
                <i class="fa fa-heading fa-2x" />
              </span>
            </a>
          </p>
        </div>
      </div>
    </section>
    <section id="content" class="section">
      <h1 class="title">
        Content
      </h1>
      <hr>
      <div class="content">
        <h1> Hello World </h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. </p>
        <h2> Second level </h2>
        <p> Curabitur accumsan turpis pharetra <strong> augue tincidunt </strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl. </p>
        <ul>
          <li> In fermentum leo eu lectus mollis, quis dictum mi aliquet. </li>
          <li> Morbi eu nulla lobortis, lobortis est in, fringilla felis. </li>
          <li> Aliquam nec felis in sapien venenatis viverra fermentum nec lectus. </li>
          <li> Ut non enim metus. </li>
        </ul>
        <h3> Third level </h3>
        <p>
          Quisque ante lacus, malesuada ac auctor vitae, congue
          <a href="#"> non ante </a>. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.
        </p>
        <ol>
          <li> Donec blandit a lorem id convallis. </li>
          <li> Cras gravida arcu at diam gravida gravida. </li>
          <li> Integer in volutpat libero. </li>
          <li> Donec a diam tellus. </li>
          <li> Aenean nec tortor orci. </li>
          <li> Quisque aliquam cursus urna, non bibendum massa viverra eget. </li>
          <li> Vivamus maximus ultricies pulvinar. </li>
        </ol>
        <blockquote> Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis. </blockquote>
        <p> Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et <em> justo sodales </em> elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie. </p>
        <p> Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum commodo. </p>
        <p> Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla. Nulla facilisi. Nullam ac erat ante. </p>
        <h4> Fourth level </h4>
        <p> Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at elementum ex efficitur. </p>
        <p> Maecenas eleifend sollicitudin dui faucibus sollicitudin augue cursus non. Ut finibus eleifend arcu ut vehicula. Mauris eu est maximus est porta condimentum in eu justo. Nulla id iaculis sapien. </p>
        <table>
          <thead>
            <tr>
              <th> One </th>
              <th> Two </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> Three </td>
              <td> Four </td>
            </tr>
            <tr>
              <td> Five </td>
              <td> Six </td>
            </tr>
            <tr>
              <td> Seven </td>
              <td> Eight </td>
            </tr>
            <tr>
              <td> Nine </td>
              <td> Ten </td>
            </tr>
            <tr>
              <td> Eleven </td>
              <td> Twelve </td>
            </tr>
          </tbody>
        </table>
        <p> Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus, mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae ultricies ex sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum. Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque. </p>
        <h5> Fifth level </h5>
        <p> Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue laoreet. Sed nec eleifend justo. Nam et sollicitudin odio. </p>
        <h6> Sixth level </h6>
        <p> Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend eros accumsan. Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada ultrices turpis. Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum tortor maximus dui, sed varius sapien odio vitae est. Etiam at cursus metus. </p>
      </div>
    </section>

    <section id="delete" class="section">
      <h1 class="title">
        Delete
      </h1>
      <hr>
      <div class="block">
        <span class="tag is-success"> Hello World
          <button class="delete is-small" />
        </span>
        <a class="delete is-small" />
        <a class="delete" />
        <a class="delete is-medium" />
        <a class="delete is-large" />
      </div>
      <div class="notification is-danger">
        <button class="delete" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit
      </div>
      <article class="message is-info">
        <div class="message-header">
          Info
          <button class="delete" />
        </div>
        <div class="message-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
        </div>
      </article>
    </section>

    <section id="form" class="section">
      <h1 class="title">
        Form
      </h1>
      <hr>
      <div class="columns">
        <div class="column">
          <div class="field">
            <label class="label">Name</label>
            <p class="control">
              <input class="input" type="text" placeholder="Text input">
            </p>
          </div>
          <div class="field">
            <label class="label">Username</label>
            <p class="control has-icons-left has-icons-right">
              <input class="input is-success" type="text" placeholder="Text input" value="bulma">
              <span class="icon is-small is-left">
                <i class="fa fa-user" />
              </span>
              <span class="icon is-small is-right">
                <i class="fa fa-check" />
              </span>
            </p>
            <p class="help is-success">
              This username is available
            </p>
          </div>
          <div class="field">
            <label class="label">Email</label>
            <p class="control has-icons-left has-icons-right">
              <input class="input is-danger" type="text" placeholder="Email input" value="hello@">
              <span class="icon is-small is-left">
                <i class="fa fa-envelope" />
              </span>
              <span class="icon is-small is-right">
                <i class="fa fa-warning" />
              </span>
            </p>
            <p class="help is-danger">
              This email is invalid
            </p>
          </div>
          <div class="field">
            <label class="label">Subject</label>
            <p class="control">
              <span class="select">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </span>
            </p>
          </div>
          <div class="field">
            <label class="label">Files to join</label>
            <p class="control">
              <span class="select is-multiple">
                <select multiple="">
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </span>
            </p>
          </div>
          <div class="field">
            <label class="label">Message</label>
            <p class="control">
              <textarea class="textarea" placeholder="Textarea" />
            </p>
          </div>
          <div class="field">
            <p class="control">
              <label class="checkbox">
                <input type="checkbox"> I agree to the
                <a href="#">terms and conditions</a>
              </label>
            </p>
          </div>
          <div class="field">
            <p class="control">
              <label class="radio">
                <input type="radio" name="question"> Yes
              </label>
              <label class="radio">
                <input type="radio" name="question"> No
              </label>
            </p>
          </div>
          <div class="field is-grouped">
            <p class="control">
              <button class="button is-primary">
                Submit
              </button>
            </p>
            <p class="control">
              <button class="button is-fuchsia">
                Cancel
              </button>
            </p>
          </div>
          <br>
          <h4 class="subtitle">
            Disabled
          </h4>
          <hr>
          <div class="field">
            <p class="control">
              <input class="input" disabled="" placeholder="Disabled input" type="text">
            </p>
          </div>
          <div class="field">
            <p class="control">
              <textarea class="textarea" disabled="" placeholder="Disabled textarea" />
            </p>
          </div>
          <div class="field">
            <p class="control">
              <label class="checkbox is-disabled">
                <input disabled="" type="checkbox"> Remember me
              </label>
            </p>
          </div>
          <div class="field">
            <p class="control">
              <label class="radio is-disabled">
                <input disabled="" name="question" type="radio"> Yes
              </label>
              <label class="radio is-disabled">
                <input disabled="" name="question" type="radio"> No
              </label>
            </p>
          </div>
          <div class="field is-grouped">
            <p class="control">
              <button class="button is-primary" disabled="">
                Submit
              </button>
            </p>
            <p class="control">
              <button class="button" disabled="">
                Cancel
              </button>
            </p>
          </div>
          <br>
          <h3 class="title">
            Horizontal Form
          </h3>
          <hr>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">From</label>
            </div>
            <div class="field-body">
              <div class="field is-grouped">
                <p class="control is-expanded has-icons-left">
                  <input class="input" type="text" placeholder="Name">
                  <span class="icon is-small is-left">
                    <i class="fa fa-user" />
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control is-expanded has-icons-left has-icons-right">
                  <input class="input is-success" type="email" placeholder="Email" value="alex@smith.com">
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope" />
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fa fa-check" />
                  </span>
                </p>
                <p class="help is-success">
                  This email is correct
                </p>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Department</label>
            </div>
            <div class="field-body">
              <div class="field is-narrow">
                <div class="control">
                  <div class="select is-fullwidth">
                    <select>
                      <option>Business development</option>
                      <option>Marketing</option>
                      <option>Sales</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Skills</label>
            </div>
            <div class="field-body">
              <p class="control">
                <span class="select is-multiple">
                  <select multiple="">
                    <option>Science computer</option>
                    <option>Development</option>
                    <option>Management</option>
                    <option>Relationship</option>
                  </select>
                </span>
              </p>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label">
              <label class="label">Already a member?</label>
            </div>
            <div class="field-body">
              <div class="field is-narrow">
                <div class="control">
                  <label class="radio">
                    <input type="radio" name="member"> Yes
                  </label>
                  <label class="radio">
                    <input type="radio" name="member"> No
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Subject</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input class="input is-danger" type="text" placeholder="e.g. Partnership opportunity">
                </div>
                <p class="help is-danger">
                  This field is required
                </p>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Question</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <textarea class="textarea" placeholder="Explain how we can help you" />
                </div>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label">
              <!-- Left empty for spacing -->
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <button class="button is-primary">
                    Send message
                  </button>
                </div>
              </div>
            </div>
          </div>
          <br>
          <h3 class="title">
            File
          </h3>
          <hr>
          <div class="field">
            <div class="file">
              <label class="file-label">
                <input class="file-input" type="file" name="resume">
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fa fa-upload" />
                  </span>
                  <span class="file-label">
                    Choose a file…
                  </span>
                </span>
              </label>
            </div>
          </div>
          <div class="field">
            <div class="file has-name">
              <label class="file-label">
                <input class="file-input" type="file" name="resume">
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fa fa-upload" />
                  </span>
                  <span class="file-label">
                    Choose a file…
                  </span>
                </span>
                <span class="file-name">
                  Screen Shot 2017-07-29 at 15.54.25.png
                </span>
              </label>
            </div>
          </div>
          <div class="field">
            <div class="file is-primary">
              <label class="file-label">
                <input class="file-input" type="file" name="resume">
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fa fa-upload" />
                  </span>
                  <span class="file-label">
                    Primary file…
                  </span>
                </span>
              </label>
            </div>
          </div>

          <div class="field">
            <div class="file is-info has-name">
              <label class="file-label">
                <input class="file-input" type="file" name="resume">
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fa fa-upload" />
                  </span>
                  <span class="file-label">
                    Info file…
                  </span>
                </span>
                <span class="file-name">
                  Screen Shot 2017-07-29 at 15.54.25.png
                </span>
              </label>
            </div>
          </div>

          <div class="field">
            <div class="file is-warning is-boxed">
              <label class="file-label">
                <input class="file-input" type="file" name="resume">
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fa fa-cloud-upload-alt" />
                  </span>
                  <span class="file-label">
                    Warning file…
                  </span>
                </span>
              </label>
            </div>
          </div>

          <div class="field">
            <div class="file is-danger has-name is-boxed">
              <label class="file-label">
                <input class="file-input" type="file" name="resume">
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fa fa-cloud-upload-alt" />
                  </span>
                  <span class="file-label">
                    Danger file…
                  </span>
                </span>
                <span class="file-name">
                  Screen Shot 2017-07-29 at 15.54.25.png
                </span>
              </label>
            </div>
          </div>
        </div>
        <div class="column">
          <br>
          <h3 class="subtitle">
            Styles
          </h3>
          <hr>
          <div class="field">
            <p class="control">
              <input class="input is-rounded" type="text" placeholder="Rounded input">
            </p>
          </div>
          <br>
          <h3 class="subtitle">
            Colors
          </h3>
          <hr>
          <div class="field">
            <p class="control">
              <input class="input is-primary" type="text" placeholder="Primary input">
            </p>
          </div>
          <div class="field">
            <p class="control">
              <input class="input is-info" type="text" placeholder="Info input">
            </p>
          </div>
          <div class="field">
            <p class="control">
              <input class="input is-success" type="text" placeholder="Success input">
            </p>
          </div>
          <div class="field">
            <p class="control">
              <input class="input is-warning" type="text" placeholder="Warning input">
            </p>
          </div>
          <div class="field">
            <p class="control">
              <input class="input is-danger" type="text" placeholder="Danger input">
            </p>
          </div>
          <br>
          <h3 class="subtitle">
            Sizes
          </h3>
          <hr>
          <div class="field">
            <p class="control">
              <input class="input is-small" type="text" placeholder="Small input">
            </p>
          </div>
          <div class="field">
            <p class="control">
              <input class="input" type="text" placeholder="Normal input">
            </p>
          </div>
          <div class="field">
            <p class="control">
              <input class="input is-medium" type="text" placeholder="Medium input">
            </p>
          </div>
          <div class="field">
            <p class="control">
              <input class="input is-large" type="text" placeholder="Large input">
            </p>
          </div>
          <div class="field">
            <p class="control">
              <span class="select is-small">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control">
              <span class="select">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control">
              <span class="select is-medium">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control">
              <span class="select is-large">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </span>
            </p>
          </div>
          <div class="field">
            <label class="label is-small">Small input</label>
            <p class="control has-icons-left has-icons-right">
              <input class="input is-small" type="email" placeholder="Email">
              <span class="icon is-small is-left">
                <i class="fa fa-envelope" />
              </span>
              <span class="icon is-small is-right">
                <i class="fa fa-check" />
              </span>
            </p>
          </div>
          <div class="field">
            <label class="label">Normal input</label>
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="email" placeholder="Email">
              <span class="icon is-small is-left">
                <i class="fa fa-envelope" />
              </span>
              <span class="icon is-small is-right">
                <i class="fa fa-check" />
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="email" placeholder="Email">
              <span class="icon is-left">
                <i class="fa fa-envelope" />
              </span>
              <span class="icon is-right">
                <i class="fa fa-check" />
              </span>
            </p>
          </div>
          <div class="field">
            <label class="label is-medium">Medium input</label>
            <p class="control has-icons-left has-icons-right">
              <input class="input is-medium" type="email" placeholder="Email">
              <span class="icon is-small is-left">
                <i class="fa fa-envelope" />
              </span>
              <span class="icon is-small is-right">
                <i class="fa fa-check" />
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input is-medium" type="email" placeholder="Email">
              <span class="icon is-left">
                <i class="fa fa-envelope" />
              </span>
              <span class="icon is-right">
                <i class="fa fa-check" />
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input is-medium" type="email" placeholder="Email">
              <span class="icon is-medium is-left">
                <i class="fa fa-envelope" />
              </span>
              <span class="icon is-medium is-right">
                <i class="fa fa-check" />
              </span>
            </p>
          </div>
          <div class="field">
            <label class="label is-large">Large input</label>
            <p class="control has-icons-left has-icons-right">
              <input class="input is-large" type="email" placeholder="Email">
              <span class="icon is-small is-left">
                <i class="fa fa-envelope" />
              </span>
              <span class="icon is-small is-right">
                <i class="fa fa-check" />
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input is-large" type="email" placeholder="Email">
              <span class="icon is-left">
                <i class="fa fa-envelope" />
              </span>
              <span class="icon is-right">
                <i class="fa fa-check" />
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input is-large" type="email" placeholder="Email">
              <span class="icon is-medium is-left">
                <i class="fa fa-envelope" />
              </span>
              <span class="icon is-medium is-right">
                <i class="fa fa-check" />
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input is-large" type="email" placeholder="Email">
              <span class="icon is-large is-left">
                <i class="fa fa-envelope" />
              </span>
              <span class="icon is-large is-right">
                <i class="fa fa-check" />
              </span>
            </p>
          </div>
          <br>
          <h4 class="subtitle">
            With Font Awesome icons
          </h4>
          <hr>
          <div class="field">
            <p class="control has-icons-left">
              <input class="input" type="email" placeholder="Email">
              <span class="icon is-small is-left">
                <i class="fa fa-envelope" />
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input class="input" type="password" placeholder="Password">
              <span class="icon is-small is-left">
                <i class="fa fa-lock" />
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control">
              <button class="button is-success">
                Login
              </button>
            </p>
          </div>
          <br>
          <h3 class="title">
            Form addons
          </h3>
          <hr>
          <div class="field has-addons">
            <p class="control">
              <input class="input" type="text" placeholder="Find a repository">
            </p>
            <p class="control">
              <a class="button is-info">
                Search
              </a>
            </p>
          </div>
          <div class="field has-addons">
            <p class="control">
              <input class="input is-large" type="text" placeholder="Find a repository">
            </p>
            <p class="control">
              <a class="button is-info is-large">
                Search
              </a>
            </p>
          </div>
          <div class="field has-addons">
            <p class="control">
              <span class="select">
                <select>
                  <option>$</option>
                  <option>£</option>
                  <option>€</option>
                </select>
              </span>
            </p>
            <p class="control">
              <input class="input" type="text" placeholder="Amount of money">
            </p>
            <p class="control">
              <a class="button">
                Transfer
              </a>
            </p>
          </div>
          <div class="field has-addons">
            <p class="control">
              <span class="select">
                <select>
                  <option>$</option>
                  <option>£</option>
                  <option>€</option>
                </select>
              </span>
            </p>
            <p class="control is-expanded">
              <input class="input" type="text" placeholder="Amount of money">
            </p>
            <p class="control">
              <a class="button">
                Transfer
              </a>
            </p>
          </div>
          <div class="field has-addons">
            <p class="control is-expanded">
              <span class="select is-fullwidth">
                <select name="country">
                  <option value="Argentina">Argentina</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Chile">Chile</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Guyana">Guyana</option>
                  <option value="Paraguay">Paraguay</option>
                  <option value="Peru">Peru</option>
                  <option value="Suriname">Suriname</option>
                  <option value="Uruguay">Uruguay</option>
                  <option value="Venezuela">Venezuela</option>
                </select>
              </span>
            </p>
            <p class="control">
              <button type="submit" class="button is-primary">
                Choose
              </button>
            </p>
          </div>
          <div class="field is-grouped">
            <p class="control is-expanded">
              <input class="input" type="text" placeholder="Find a repository">
            </p>
            <p class="control">
              <a class="button is-info">
                Search
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="icon" class="section">
      <h1 class="title">
        Icons
      </h1>
      <hr>
      <span class="icon"> <i class="fas fa-home" /> </span>
      <span class="icon is-medium"> <i class="fas fa-lg fa-home" /> </span>
      <span class="icon is-large"> <i class="fas fa-2x fa-home" /> </span>
    </section>

    <section id="images" class="section">
      <h1 class="title">
        Images
      </h1>
      <hr>
      <figure class="image is-128x128">
        <img src="https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg">
      </figure>
    </section>

    <section id="notifications" class="section">
      <h1 class="title">
        Notifications
      </h1>
      <hr>
      <div class="columns is-multiline">
        <div class="column is-half">
          <div class="notification ">
            <button class="delete" /> Lorem ipsum dolor sit amet,
            <a href="#">consectetur</a> adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>

        <div class="column is-half">
          <div class="notification is-primary">
            <button class="delete" /> Lorem ipsum dolor sit amet,
            <a href="#">consectetur</a> adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>

        <div class="column is-half">
          <div class="notification is-fuchsia">
            <button class="delete" /> Lorem ipsum dolor sit amet,
            <a href="#">consectetur</a> adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>

        <div class="column is-half">
          <div class="notification is-info">
            <button class="delete" /> Lorem ipsum dolor sit amet,
            <a href="#">consectetur</a> adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>

        <div class="column is-half">
          <div class="notification is-success">
            <button class="delete" /> Lorem ipsum dolor sit amet,
            <a href="#">consectetur</a> adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>

        <div class="column is-half">
          <div class="notification is-warning">
            <button class="delete" /> Lorem ipsum dolor sit amet,
            <a href="#">consectetur</a> adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>

        <div class="column is-half">
          <div class="notification is-danger">
            <button class="delete" /> Lorem ipsum dolor sit amet,
            <a href="#">consectetur</a> adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>
      </div>
    </section>

    <section id="progress" class="section">
      <h1 class="title">
        Progress bars
      </h1>
      <hr>

      <progress class="progress " max="100" value="15">
        15%
      </progress>

      <progress class="progress is-primary" max="100" value="15">
        15%
      </progress>

      <progress class="progress is-fuchsia" max="100" value="15">
        15%
      </progress>

      <progress class="progress is-info" max="100" value="15">
        15%
      </progress>

      <progress class="progress is-success" max="100" value="15">
        15%
      </progress>

      <progress class="progress is-warning" max="100" value="15">
        15%
      </progress>

      <progress class="progress is-danger" max="100" value="15">
        15%
      </progress>

      <progress class="progress is-small" max="100" value="15">
        15%
      </progress>
      <progress class="progress" max="100" value="30">
        30%
      </progress>
      <progress class="progress is-medium" max="100" value="45">
        45%
      </progress>
      <progress class="progress is-large" max="100" value="60">
        60%
      </progress>
      <h2 class="title is-2">
        Indeterminate
      </h2>
      <progress class="progress is-small is-primary" max="100">
        15%
      </progress>
      <progress class="progress is-danger" max="100">
        30%
      </progress>
      <progress class="progress is-medium is-red" max="100">
        45%
      </progress>
      <progress class="progress is-large is-info" max="100">
        60%
      </progress>
    </section>

    <section id="table" class="section">
      <h1 class="title">
        Table
      </h1>
      <hr>
      <table class="table">
        <thead>
          <tr>
            <th>
              <abbr title="Position"> Pos </abbr>
            </th>
            <th> Team </th>
            <th>
              <abbr title="Played"> Pld </abbr>
            </th>
            <th>
              <abbr title="Won"> W </abbr>
            </th>
            <th>
              <abbr title="Drawn"> D </abbr>
            </th>
            <th>
              <abbr title="Lost"> L </abbr>
            </th>
            <th>
              <abbr title="Goals for"> GF </abbr>
            </th>
            <th>
              <abbr title="Goals against"> GA </abbr>
            </th>
            <th>
              <abbr title="Goal difference"> GD </abbr>
            </th>
            <th>
              <abbr title="Points"> Pts </abbr>
            </th>
            <th> Qualification or relegation </th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>
              <abbr title="Position"> Pos </abbr>
            </th>
            <th> Team </th>
            <th>
              <abbr title="Played"> Pld </abbr>
            </th>
            <th>
              <abbr title="Won"> W </abbr>
            </th>
            <th>
              <abbr title="Drawn"> D </abbr>
            </th>
            <th>
              <abbr title="Lost"> L </abbr>
            </th>
            <th>
              <abbr title="Goals for"> GF </abbr>
            </th>
            <th>
              <abbr title="Goals against"> GA </abbr>
            </th>
            <th>
              <abbr title="Goal difference"> GD </abbr>
            </th>
            <th>
              <abbr title="Points"> Pts </abbr>
            </th>
            <th> Qualification or relegation </th>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <th> 1 </th>
            <td>
              <a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C."> Leicester City </a> <strong> (C) </strong>
            </td>
            <td> 38 </td>
            <td> 23 </td>
            <td> 12 </td>
            <td> 3 </td>
            <td> 68 </td>
            <td> 36 </td>
            <td> +32 </td>
            <td> 81 </td>
            <td>
              Qualification for the
              <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League"> Champions League group stage </a>
            </td>
          </tr>
          <tr>
            <th> 2 </th>
            <td>
              <a href="https://en.wikipedia.org/wiki/Arsenal_F.C." title="Arsenal F.C."> Arsenal </a>
            </td>
            <td> 38 </td>
            <td> 20 </td>
            <td> 11 </td>
            <td> 7 </td>
            <td> 65 </td>
            <td> 36 </td>
            <td> +29 </td>
            <td> 71 </td>
            <td>
              Qualification for the
              <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League"> Champions League group stage </a>
            </td>
          </tr>
          <tr>
            <th> 3 </th>
            <td>
              <a href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C." title="Tottenham Hotspur F.C."> Tottenham Hotspur </a>
            </td>
            <td> 38 </td>
            <td> 19 </td>
            <td> 13 </td>
            <td> 6 </td>
            <td> 69 </td>
            <td> 35 </td>
            <td> +34 </td>
            <td> 70 </td>
            <td>
              Qualification for the
              <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League"> Champions League group stage </a>
            </td>
          </tr>
          <tr>
            <th> 4 </th>
            <td>
              <a href="https://en.wikipedia.org/wiki/Manchester_City_F.C." title="Manchester City F.C."> Manchester City </a>
            </td>
            <td> 38 </td>
            <td> 19 </td>
            <td> 9 </td>
            <td> 10 </td>
            <td> 71 </td>
            <td> 41 </td>
            <td> +30 </td>
            <td> 66 </td>
            <td>
              Qualification for the
              <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round" title="2016–17 UEFA Champions League"> Champions League play-off round </a>
            </td>
          </tr>
          <tr class="is-selected">
            <th> 5 </th>
            <td>
              <a href="https://en.wikipedia.org/wiki/Manchester_United_F.C." title="Manchester United F.C."> Manchester United </a>
            </td>
            <td> 38 </td>
            <td> 19 </td>
            <td> 9 </td>
            <td> 10 </td>
            <td> 49 </td>
            <td> 35 </td>
            <td> +14 </td>
            <td> 66 </td>
            <td>
              Qualification for the
              <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage" title="2016–17 UEFA Europa League"> Europa League group stage </a>
            </td>
          </tr>
          <tr>
            <th> 6 </th>
            <td>
              <a href="https://en.wikipedia.org/wiki/Southampton_F.C." title="Southampton F.C."> Southampton </a>
            </td>
            <td> 38 </td>
            <td> 18 </td>
            <td> 9 </td>
            <td> 11 </td>
            <td> 59 </td>
            <td> 41 </td>
            <td> +18 </td>
            <td> 63 </td>
            <td>
              Qualification for the
              <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage" title="2016–17 UEFA Europa League"> Europa League group stage </a>
            </td>
          </tr>
          <tr>
            <th> 7 </th>
            <td>
              <a href="https://en.wikipedia.org/wiki/West_Ham_United_F.C." title="West Ham United F.C."> West Ham United </a>
            </td>
            <td> 38 </td>
            <td> 16 </td>
            <td> 14 </td>
            <td> 8 </td>
            <td> 65 </td>
            <td> 51 </td>
            <td> +14 </td>
            <td> 62 </td>
            <td>
              Qualification for the
              <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Third_qualifying_round" title="2016–17 UEFA Europa League"> Europa League third qualifying round </a>
            </td>
          </tr>
          <tr>
            <th> 8 </th>
            <td>
              <a href="https://en.wikipedia.org/wiki/Liverpool_F.C." title="Liverpool F.C."> Liverpool </a>
            </td>
            <td> 38 </td>
            <td> 16 </td>
            <td> 12 </td>
            <td> 10 </td>
            <td> 63 </td>
            <td> 50 </td>
            <td> +13 </td>
            <td> 60 </td>
            <td />
          </tr>
          <tr>
            <th> 9 </th>
            <td>
              <a href="https://en.wikipedia.org/wiki/Stoke_City_F.C." title="Stoke City F.C."> Stoke City </a>
            </td>
            <td> 38 </td>
            <td> 14 </td>
            <td> 9 </td>
            <td> 15 </td>
            <td> 41 </td>
            <td> 55 </td>
            <td> −14 </td>
            <td> 51 </td>
            <td />
          </tr>
          <tr>
            <th> 10 </th>
            <td>
              <a href="https://en.wikipedia.org/wiki/Chelsea_F.C." title="Chelsea F.C."> Chelsea </a>
            </td>
            <td> 38 </td>
            <td> 12 </td>
            <td> 14 </td>
            <td> 12 </td>
            <td> 59 </td>
            <td> 53 </td>
            <td> +6 </td>
            <td> 50 </td>
            <td />
          </tr>
          <tr>
            <th> 11 </th>
            <td>
              <a href="https://en.wikipedia.org/wiki/Everton_F.C." title="Everton F.C."> Everton </a>
            </td>
            <td> 38 </td>
            <td> 11 </td>
            <td> 14 </td>
            <td> 13 </td>
            <td> 59 </td>
            <td> 55 </td>
            <td> +4 </td>
            <td> 47 </td>
            <td />
          </tr>
          <tr>
            <th> 12 </th>
            <td>
              <a href="https://en.wikipedia.org/wiki/Swansea_City_A.F.C." title="Swansea City A.F.C."> Swansea City </a>
            </td>
            <td> 38 </td>
            <td> 12 </td>
            <td> 11 </td>
            <td> 15 </td>
            <td> 42 </td>
            <td> 52 </td>
            <td> −10 </td>
            <td> 47 </td>
            <td />
          </tr>
          <tr>
            <th> 13 </th>
            <td>
              <a href="https://en.wikipedia.org/wiki/Watford_F.C." title="Watford F.C."> Watford </a>
            </td>
            <td> 38 </td>
            <td> 12 </td>
            <td> 9 </td>
            <td> 17 </td>
            <td> 40 </td>
            <td> 50 </td>
            <td> −10 </td>
            <td> 45 </td>
            <td />
          </tr>
          <tr>
            <th> 14 </th>
            <td>
              <a href="https://en.wikipedia.org/wiki/West_Bromwich_Albion_F.C." title="West Bromwich Albion F.C."> West Bromwich Albion </a>
            </td>
            <td> 38 </td>
            <td> 10 </td>
            <td> 13 </td>
            <td> 15 </td>
            <td> 34 </td>
            <td> 48 </td>
            <td> −14 </td>
            <td> 43 </td>
            <td />
          </tr>
          <tr>
            <th> 15 </th>
            <td>
              <a href="https://en.wikipedia.org/wiki/Crystal_Palace_F.C." title="Crystal Palace F.C."> Crystal Palace </a>
            </td>
            <td> 38 </td>
            <td> 11 </td>
            <td> 9 </td>
            <td> 18 </td>
            <td> 39 </td>
            <td> 51 </td>
            <td> −12 </td>
            <td> 42 </td>
            <td />
          </tr>
          <tr>
            <th> 16 </th>
            <td>
              <a href="https://en.wikipedia.org/wiki/A.F.C._Bournemouth" title="A.F.C. Bournemouth"> AFC Bournemouth </a>
            </td>
            <td> 38 </td>
            <td> 11 </td>
            <td> 9 </td>
            <td> 18 </td>
            <td> 45 </td>
            <td> 67 </td>
            <td> −22 </td>
            <td> 42 </td>
            <td />
          </tr>
          <tr>
            <th> 17 </th>
            <td>
              <a href="https://en.wikipedia.org/wiki/Sunderland_A.F.C." title="Sunderland A.F.C."> Sunderland </a>
            </td>
            <td> 38 </td>
            <td> 9 </td>
            <td> 12 </td>
            <td> 17 </td>
            <td> 48 </td>
            <td> 62 </td>
            <td> −14 </td>
            <td> 39 </td>
            <td />
          </tr>
          <tr>
            <th> 18 </th>
            <td>
              <a href="https://en.wikipedia.org/wiki/Newcastle_United_F.C." title="Newcastle United F.C."> Newcastle United </a> <strong> (R) </strong>
            </td>
            <td> 38 </td>
            <td> 9 </td>
            <td> 10 </td>
            <td> 19 </td>
            <td> 44 </td>
            <td> 65 </td>
            <td> −21 </td>
            <td> 37 </td>
            <td>
              Relegation to the
              <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship" title="2016–17 Football League Championship"> Football League Championship </a>
            </td>
          </tr>
          <tr>
            <th> 19 </th>
            <td>
              <a href="https://en.wikipedia.org/wiki/Norwich_City_F.C." title="Norwich City F.C."> Norwich City </a> <strong> (R) </strong>
            </td>
            <td> 38 </td>
            <td> 9 </td>
            <td> 7 </td>
            <td> 22 </td>
            <td> 39 </td>
            <td> 67 </td>
            <td> −28 </td>
            <td> 34 </td>
            <td>
              Relegation to the
              <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship" title="2016–17 Football League Championship"> Football League Championship </a>
            </td>
          </tr>
          <tr>
            <th> 20 </th>
            <td>
              <a href="https://en.wikipedia.org/wiki/Aston_Villa_F.C." title="Aston Villa F.C."> Aston Villa </a> <strong> (R) </strong>
            </td>
            <td> 38 </td>
            <td> 3 </td>
            <td> 8 </td>
            <td> 27 </td>
            <td> 27 </td>
            <td> 76 </td>
            <td> −49 </td>
            <td> 17 </td>
            <td>
              Relegation to the
              <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship" title="2016–17 Football League Championship"> Football League Championship </a>
            </td>
          </tr>
        </tbody>
      </table>
      <br>
      <table class="table is-striped">
        <thead>
          <tr>
            <th> One </th>
            <th> Two </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> Three </td>
            <td> Four </td>
          </tr>
          <tr>
            <td> Five </td>
            <td> Six </td>
          </tr>
          <tr>
            <td> Seven </td>
            <td> Eight </td>
          </tr>
          <tr>
            <td> Nine </td>
            <td> Ten </td>
          </tr>
          <tr>
            <td> Eleven </td>
            <td> Twelve </td>
          </tr>
        </tbody>
      </table>
      <br>
      <table class="table is-bordered">
        <thead>
          <tr>
            <th> One </th>
            <th> Two </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> Three </td>
            <td> Four </td>
          </tr>
        </tbody>
      </table>
      <br>
      <table class="table is-narrow">
        <thead>
          <tr>
            <th> One </th>
            <th> Two </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> Three </td>
            <td> Four </td>
          </tr>
          <tr>
            <td> Five </td>
            <td> Six </td>
          </tr>
          <tr>
            <td> Seven </td>
            <td> Eight </td>
          </tr>
          <tr>
            <td> Nine </td>
            <td> Ten </td>
          </tr>
          <tr>
            <td> Eleven </td>
            <td> Twelve </td>
          </tr>
        </tbody>
      </table>
      <br>
      <table class="table is-bordered is-striped is-narrow">
        <thead>
          <tr>
            <th> One </th>
            <th> Two </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> Three </td>
            <td> Four </td>
          </tr>
          <tr>
            <td> Five </td>
            <td> Six </td>
          </tr>
          <tr>
            <td> Seven </td>
            <td> Eight </td>
          </tr>
          <tr>
            <td> Nine </td>
            <td> Ten </td>
          </tr>
          <tr>
            <td> Eleven </td>
            <td> Twelve </td>
          </tr>
        </tbody>
      </table>
    </section>

    <section id="tag" class="section">
      <h1 class="title">
        Tag
      </h1>
      <hr>
      <div class="tags">
        <span class="tag is-primary"> Primary </span>

        <span class="tag is-fuchsia"> Fuchsia </span>

        <span class="tag is-info"> Info </span>

        <span class="tag is-success"> Success </span>

        <span class="tag is-warning"> Warning </span>

        <span class="tag is-danger"> Danger </span>

        <span class="tag is-yellow"> Yellow </span>

        <span class="tag is-beet"> Black </span>

        <span class="tag is-orange"> Orange </span>

        <span class="tag is-red"> Red </span>

        <span class="tag is-primary is-medium"> Medium </span>
        <span class="tag is-info is-large"> Large </span>
        <span class="tag is-success"> Bar
          <button class="delete is-small" />
        </span>
        <span class="tag is-warning is-medium"> Hello
          <button class="delete is-small" />
        </span>
        <span class="tag is-danger is-large"> World
          <button class="delete" />
        </span>
      </div>
      <div class="field is-grouped is-grouped-multiline">
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-red">npm</span>
            <span class="tag is-info">0.5.0</span>
          </div>
        </div>

        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-red">build</span>
            <span class="tag is-success">passing</span>
          </div>
        </div>

        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-red">chat</span>
            <span class="tag is-primary">on gitter</span>
          </div>
        </div>
      </div>
      <div class="field is-grouped is-grouped-multiline">
        <div class="control">
          <div class="tags has-addons">
            <a class="tag is-fuchsia">Technology</a>
            <a class="tag is-delete" />
          </div>
        </div>

        <div class="control">
          <div class="tags has-addons">
            <a class="tag is-fuchsia">CSS</a>
            <a class="tag is-delete" />
          </div>
        </div>

        <div class="control">
          <div class="tags has-addons">
            <a class="tag is-fuchsia">Flexbox</a>
            <a class="tag is-delete" />
          </div>
        </div>

        <div class="control">
          <div class="tags has-addons">
            <a class="tag is-fuchsia">Web Design</a>
            <a class="tag is-delete" />
          </div>
        </div>

        <div class="control">
          <div class="tags has-addons">
            <a class="tag is-fuchsia">Open Source</a>
            <a class="tag is-delete" />
          </div>
        </div>

        <div class="control">
          <div class="tags has-addons">
            <a class="tag is-fuchsia">Community</a>
            <a class="tag is-delete" />
          </div>
        </div>

        <div class="control">
          <div class="tags has-addons">
            <a class="tag is-fuchsia">Documentation</a>
            <a class="tag is-delete" />
          </div>
        </div>
      </div>
    </section>
    <section id="breadcrumb" class="section">
      <h1 class="title">
        Breadcrumb
      </h1>
      <hr>
      <nav class="breadcrumb">
        <ul>
          <li>
            <a>Bulma</a>
          </li>
          <li>
            <a>Documentation</a>
          </li>
          <li>
            <a>Components</a>
          </li>
          <li class="is-active">
            <a>Breadcrumb</a>
          </li>
        </ul>
      </nav>
    </section>

    <section id="hero" class="section">
      <h1 class="title">
        Hero
      </h1>
      <hr>

      <section>
        <div>
          <nav class="navbar ">
            <div class="container">
              <div class="navbar-brand">
                <a class="navbar-item">
                  <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
                </a>
                <span class="navbar-burger burger" data-target="navbarMenuHero1">
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              <div id="navbarMenuHero1" class="navbar-menu">
                <div class="navbar-end">
                  <a class="navbar-item is-active">
                    Home
                  </a>
                  <a class="navbar-item">
                    Examples
                  </a>
                  <a class="navbar-item">
                    Documentation
                  </a>
                  <div class="navbar-item has-dropdown is-hoverable">
                    <div class="navbar-link">
                      More
                    </div>
                    <div id="moreDropdown" class="navbar-dropdown ">
                      <a class="navbar-item " href="#">
                        <div class="level is-mobile">
                          <div class="level-left">
                            <div class="level-item">
                              <p>
                                <strong>Extensions</strong>
                                <br>
                                <small>Side projects to enhance Bulma</small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <span class="navbar-item">
                    <a class="button is-primary is-inverted">
                      <span class="icon">
                        <i class="fab fa-github" />
                      </span>
                      <span>Download</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <!-- Hero content: will be in the middle -->
        <div class="hero ">
          <div class="hero-body">
            <div class="container has-text-centered">
              <h1 class="title">
                Title
              </h1>
              <h2 class="subtitle">
                Subtitle
              </h2>
            </div>
          </div>
          <!-- Hero footer: will stick at the bottom -->
          <div class="hero-foot">
            <nav class="tabs">
              <div class="container">
                <ul>
                  <li class="is-active">
                    <a>Overview</a>
                  </li>
                  <li>
                    <a>Modifiers</a>
                  </li>
                  <li>
                    <a>Grid</a>
                  </li>
                  <li>
                    <a>Elements</a>
                  </li>
                  <li>
                    <a>Components</a>
                  </li>
                  <li>
                    <a>Layout</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </section>
      <br>

      <section>
        <div>
          <nav class="navbar is-primary">
            <div class="container">
              <div class="navbar-brand">
                <a class="navbar-item">
                  <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
                </a>
                <span class="navbar-burger burger" data-target="navbarMenuHero2">
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              <div id="navbarMenuHero2" class="navbar-menu">
                <div class="navbar-end">
                  <a class="navbar-item is-active">
                    Home
                  </a>
                  <a class="navbar-item">
                    Examples
                  </a>
                  <a class="navbar-item">
                    Documentation
                  </a>
                  <div class="navbar-item has-dropdown is-hoverable">
                    <div class="navbar-link">
                      More
                    </div>
                    <div id="moreDropdown" class="navbar-dropdown ">
                      <a class="navbar-item " href="#">
                        <div class="level is-mobile">
                          <div class="level-left">
                            <div class="level-item">
                              <p>
                                <strong>Extensions</strong>
                                <br>
                                <small>Side projects to enhance Bulma</small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <span class="navbar-item">
                    <a class="button is-primary is-inverted">
                      <span class="icon">
                        <i class="fab fa-github" />
                      </span>
                      <span>Download</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <!-- Hero content: will be in the middle -->
        <div class="hero is-primary">
          <div class="hero-body">
            <div class="container has-text-centered">
              <h1 class="title">
                Title
              </h1>
              <h2 class="subtitle">
                Subtitle
              </h2>
            </div>
          </div>
          <!-- Hero footer: will stick at the bottom -->
          <div class="hero-foot">
            <nav class="tabs">
              <div class="container">
                <ul>
                  <li class="is-active">
                    <a>Overview</a>
                  </li>
                  <li>
                    <a>Modifiers</a>
                  </li>
                  <li>
                    <a>Grid</a>
                  </li>
                  <li>
                    <a>Elements</a>
                  </li>
                  <li>
                    <a>Components</a>
                  </li>
                  <li>
                    <a>Layout</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </section>
      <br>

      <section>
        <div>
          <nav class="navbar is-fuchsia">
            <div class="container">
              <div class="navbar-brand">
                <a class="navbar-item">
                  <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
                </a>
                <span class="navbar-burger burger" data-target="navbarMenuHero3">
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              <div id="navbarMenuHero3" class="navbar-menu">
                <div class="navbar-end">
                  <a class="navbar-item is-active">
                    Home
                  </a>
                  <a class="navbar-item">
                    Examples
                  </a>
                  <a class="navbar-item">
                    Documentation
                  </a>
                  <div class="navbar-item has-dropdown is-hoverable">
                    <div class="navbar-link">
                      More
                    </div>
                    <div id="moreDropdown" class="navbar-dropdown ">
                      <a class="navbar-item " href="#">
                        <div class="level is-mobile">
                          <div class="level-left">
                            <div class="level-item">
                              <p>
                                <strong>Extensions</strong>
                                <br>
                                <small>Side projects to enhance Bulma</small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <span class="navbar-item">
                    <a class="button is-primary is-inverted">
                      <span class="icon">
                        <i class="fab fa-github" />
                      </span>
                      <span>Download</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <!-- Hero content: will be in the middle -->
        <div class="hero is-fuchsia">
          <div class="hero-body">
            <div class="container has-text-centered">
              <h1 class="title">
                Title
              </h1>
              <h2 class="subtitle">
                Subtitle
              </h2>
            </div>
          </div>
          <!-- Hero footer: will stick at the bottom -->
          <div class="hero-foot">
            <nav class="tabs">
              <div class="container">
                <ul>
                  <li class="is-active">
                    <a>Overview</a>
                  </li>
                  <li>
                    <a>Modifiers</a>
                  </li>
                  <li>
                    <a>Grid</a>
                  </li>
                  <li>
                    <a>Elements</a>
                  </li>
                  <li>
                    <a>Components</a>
                  </li>
                  <li>
                    <a>Layout</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </section>
      <br>

      <section>
        <div>
          <nav class="navbar is-info">
            <div class="container">
              <div class="navbar-brand">
                <a class="navbar-item">
                  <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
                </a>
                <span class="navbar-burger burger" data-target="navbarMenuHero4">
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              <div id="navbarMenuHero4" class="navbar-menu">
                <div class="navbar-end">
                  <a class="navbar-item is-active">
                    Home
                  </a>
                  <a class="navbar-item">
                    Examples
                  </a>
                  <a class="navbar-item">
                    Documentation
                  </a>
                  <div class="navbar-item has-dropdown is-hoverable">
                    <div class="navbar-link">
                      More
                    </div>
                    <div id="moreDropdown" class="navbar-dropdown ">
                      <a class="navbar-item " href="#">
                        <div class="level is-mobile">
                          <div class="level-left">
                            <div class="level-item">
                              <p>
                                <strong>Extensions</strong>
                                <br>
                                <small>Side projects to enhance Bulma</small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <span class="navbar-item">
                    <a class="button is-primary is-inverted">
                      <span class="icon">
                        <i class="fab fa-github" />
                      </span>
                      <span>Download</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <!-- Hero content: will be in the middle -->
        <div class="hero is-info">
          <div class="hero-body">
            <div class="container has-text-centered">
              <h1 class="title">
                Title
              </h1>
              <h2 class="subtitle">
                Subtitle
              </h2>
            </div>
          </div>
          <!-- Hero footer: will stick at the bottom -->
          <div class="hero-foot">
            <nav class="tabs">
              <div class="container">
                <ul>
                  <li class="is-active">
                    <a>Overview</a>
                  </li>
                  <li>
                    <a>Modifiers</a>
                  </li>
                  <li>
                    <a>Grid</a>
                  </li>
                  <li>
                    <a>Elements</a>
                  </li>
                  <li>
                    <a>Components</a>
                  </li>
                  <li>
                    <a>Layout</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </section>
      <br>

      <section>
        <div>
          <nav class="navbar is-success">
            <div class="container">
              <div class="navbar-brand">
                <a class="navbar-item">
                  <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
                </a>
                <span class="navbar-burger burger" data-target="navbarMenuHero5">
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              <div id="navbarMenuHero5" class="navbar-menu">
                <div class="navbar-end">
                  <a class="navbar-item is-active">
                    Home
                  </a>
                  <a class="navbar-item">
                    Examples
                  </a>
                  <a class="navbar-item">
                    Documentation
                  </a>
                  <div class="navbar-item has-dropdown is-hoverable">
                    <div class="navbar-link">
                      More
                    </div>
                    <div id="moreDropdown" class="navbar-dropdown ">
                      <a class="navbar-item " href="#">
                        <div class="level is-mobile">
                          <div class="level-left">
                            <div class="level-item">
                              <p>
                                <strong>Extensions</strong>
                                <br>
                                <small>Side projects to enhance Bulma</small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <span class="navbar-item">
                    <a class="button is-primary is-inverted">
                      <span class="icon">
                        <i class="fab fa-github" />
                      </span>
                      <span>Download</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <!-- Hero content: will be in the middle -->
        <div class="hero is-success">
          <div class="hero-body">
            <div class="container has-text-centered">
              <h1 class="title">
                Title
              </h1>
              <h2 class="subtitle">
                Subtitle
              </h2>
            </div>
          </div>
          <!-- Hero footer: will stick at the bottom -->
          <div class="hero-foot">
            <nav class="tabs">
              <div class="container">
                <ul>
                  <li class="is-active">
                    <a>Overview</a>
                  </li>
                  <li>
                    <a>Modifiers</a>
                  </li>
                  <li>
                    <a>Grid</a>
                  </li>
                  <li>
                    <a>Elements</a>
                  </li>
                  <li>
                    <a>Components</a>
                  </li>
                  <li>
                    <a>Layout</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </section>
      <br>

      <section>
        <div>
          <nav class="navbar is-warning">
            <div class="container">
              <div class="navbar-brand">
                <a class="navbar-item">
                  <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
                </a>
                <span class="navbar-burger burger" data-target="navbarMenuHero6">
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              <div id="navbarMenuHero6" class="navbar-menu">
                <div class="navbar-end">
                  <a class="navbar-item is-active">
                    Home
                  </a>
                  <a class="navbar-item">
                    Examples
                  </a>
                  <a class="navbar-item">
                    Documentation
                  </a>
                  <div class="navbar-item has-dropdown is-hoverable">
                    <div class="navbar-link">
                      More
                    </div>
                    <div id="moreDropdown" class="navbar-dropdown ">
                      <a class="navbar-item " href="#">
                        <div class="level is-mobile">
                          <div class="level-left">
                            <div class="level-item">
                              <p>
                                <strong>Extensions</strong>
                                <br>
                                <small>Side projects to enhance Bulma</small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <span class="navbar-item">
                    <a class="button is-primary is-inverted">
                      <span class="icon">
                        <i class="fab fa-github" />
                      </span>
                      <span>Download</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <!-- Hero content: will be in the middle -->
        <div class="hero is-warning">
          <div class="hero-body">
            <div class="container has-text-centered">
              <h1 class="title">
                Title
              </h1>
              <h2 class="subtitle">
                Subtitle
              </h2>
            </div>
          </div>
          <!-- Hero footer: will stick at the bottom -->
          <div class="hero-foot">
            <nav class="tabs">
              <div class="container">
                <ul>
                  <li class="is-active">
                    <a>Overview</a>
                  </li>
                  <li>
                    <a>Modifiers</a>
                  </li>
                  <li>
                    <a>Grid</a>
                  </li>
                  <li>
                    <a>Elements</a>
                  </li>
                  <li>
                    <a>Components</a>
                  </li>
                  <li>
                    <a>Layout</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </section>
      <br>

      <section>
        <div>
          <nav class="navbar is-danger">
            <div class="container">
              <div class="navbar-brand">
                <a class="navbar-item">
                  <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
                </a>
                <span class="navbar-burger burger" data-target="navbarMenuHero7">
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              <div id="navbarMenuHero7" class="navbar-menu">
                <div class="navbar-end">
                  <a class="navbar-item is-active">
                    Home
                  </a>
                  <a class="navbar-item">
                    Examples
                  </a>
                  <a class="navbar-item">
                    Documentation
                  </a>
                  <div class="navbar-item has-dropdown is-hoverable">
                    <div class="navbar-link">
                      More
                    </div>
                    <div id="moreDropdown" class="navbar-dropdown ">
                      <a class="navbar-item " href="#">
                        <div class="level is-mobile">
                          <div class="level-left">
                            <div class="level-item">
                              <p>
                                <strong>Extensions</strong>
                                <br>
                                <small>Side projects to enhance Bulma</small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <span class="navbar-item">
                    <a class="button is-primary is-inverted">
                      <span class="icon">
                        <i class="fab fa-github" />
                      </span>
                      <span>Download</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <!-- Hero content: will be in the middle -->
        <div class="hero is-danger">
          <div class="hero-body">
            <div class="container has-text-centered">
              <h1 class="title">
                Title
              </h1>
              <h2 class="subtitle">
                Subtitle
              </h2>
            </div>
          </div>
          <!-- Hero footer: will stick at the bottom -->
          <div class="hero-foot">
            <nav class="tabs">
              <div class="container">
                <ul>
                  <li class="is-active">
                    <a>Overview</a>
                  </li>
                  <li>
                    <a>Modifiers</a>
                  </li>
                  <li>
                    <a>Grid</a>
                  </li>
                  <li>
                    <a>Elements</a>
                  </li>
                  <li>
                    <a>Components</a>
                  </li>
                  <li>
                    <a>Layout</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </section>
      <br>

      <section>
        <div>
          <nav class="navbar is-yellow">
            <div class="container">
              <div class="navbar-brand">
                <a class="navbar-item">
                  <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
                </a>
                <span class="navbar-burger burger" data-target="navbarMenuHero8">
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              <div id="navbarMenuHero8" class="navbar-menu">
                <div class="navbar-end">
                  <a class="navbar-item is-active">
                    Home
                  </a>
                  <a class="navbar-item">
                    Examples
                  </a>
                  <a class="navbar-item">
                    Documentation
                  </a>
                  <div class="navbar-item has-dropdown is-hoverable">
                    <div class="navbar-link">
                      More
                    </div>
                    <div id="moreDropdown" class="navbar-dropdown ">
                      <a class="navbar-item " href="#">
                        <div class="level is-mobile">
                          <div class="level-left">
                            <div class="level-item">
                              <p>
                                <strong>Extensions</strong>
                                <br>
                                <small>Side projects to enhance Bulma</small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <span class="navbar-item">
                    <a class="button is-primary is-inverted">
                      <span class="icon">
                        <i class="fab fa-github" />
                      </span>
                      <span>Download</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <!-- Hero content: will be in the middle -->
        <div class="hero is-yellow">
          <div class="hero-body">
            <div class="container has-text-centered">
              <h1 class="title">
                Title
              </h1>
              <h2 class="subtitle">
                Subtitle
              </h2>
            </div>
          </div>
          <!-- Hero footer: will stick at the bottom -->
          <div class="hero-foot">
            <nav class="tabs">
              <div class="container">
                <ul>
                  <li class="is-active">
                    <a>Overview</a>
                  </li>
                  <li>
                    <a>Modifiers</a>
                  </li>
                  <li>
                    <a>Grid</a>
                  </li>
                  <li>
                    <a>Elements</a>
                  </li>
                  <li>
                    <a>Components</a>
                  </li>
                  <li>
                    <a>Layout</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </section>
      <br>

      <section>
        <div>
          <nav class="navbar is-beet">
            <div class="container">
              <div class="navbar-brand">
                <a class="navbar-item">
                  <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
                </a>
                <span class="navbar-burger burger" data-target="navbarMenuHero9">
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              <div id="navbarMenuHero9" class="navbar-menu">
                <div class="navbar-end">
                  <a class="navbar-item is-active">
                    Home
                  </a>
                  <a class="navbar-item">
                    Examples
                  </a>
                  <a class="navbar-item">
                    Documentation
                  </a>
                  <div class="navbar-item has-dropdown is-hoverable">
                    <div class="navbar-link">
                      More
                    </div>
                    <div id="moreDropdown" class="navbar-dropdown ">
                      <a class="navbar-item " href="#">
                        <div class="level is-mobile">
                          <div class="level-left">
                            <div class="level-item">
                              <p>
                                <strong>Extensions</strong>
                                <br>
                                <small>Side projects to enhance Bulma</small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <span class="navbar-item">
                    <a class="button is-primary is-inverted">
                      <span class="icon">
                        <i class="fab fa-github" />
                      </span>
                      <span>Download</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <!-- Hero content: will be in the middle -->
        <div class="hero is-beet">
          <div class="hero-body">
            <div class="container has-text-centered">
              <h1 class="title">
                Title
              </h1>
              <h2 class="subtitle">
                Subtitle
              </h2>
            </div>
          </div>
          <!-- Hero footer: will stick at the bottom -->
          <div class="hero-foot">
            <nav class="tabs">
              <div class="container">
                <ul>
                  <li class="is-active">
                    <a>Overview</a>
                  </li>
                  <li>
                    <a>Modifiers</a>
                  </li>
                  <li>
                    <a>Grid</a>
                  </li>
                  <li>
                    <a>Elements</a>
                  </li>
                  <li>
                    <a>Components</a>
                  </li>
                  <li>
                    <a>Layout</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </section>
      <br>

      <section>
        <div>
          <nav class="navbar is-orange">
            <div class="container">
              <div class="navbar-brand">
                <a class="navbar-item">
                  <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
                </a>
                <span class="navbar-burger burger" data-target="navbarMenuHero10">
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              <div id="navbarMenuHero10" class="navbar-menu">
                <div class="navbar-end">
                  <a class="navbar-item is-active">
                    Home
                  </a>
                  <a class="navbar-item">
                    Examples
                  </a>
                  <a class="navbar-item">
                    Documentation
                  </a>
                  <div class="navbar-item has-dropdown is-hoverable">
                    <div class="navbar-link">
                      More
                    </div>
                    <div id="moreDropdown" class="navbar-dropdown ">
                      <a class="navbar-item " href="#">
                        <div class="level is-mobile">
                          <div class="level-left">
                            <div class="level-item">
                              <p>
                                <strong>Extensions</strong>
                                <br>
                                <small>Side projects to enhance Bulma</small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <span class="navbar-item">
                    <a class="button is-primary is-inverted">
                      <span class="icon">
                        <i class="fab fa-github" />
                      </span>
                      <span>Download</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <!-- Hero content: will be in the middle -->
        <div class="hero is-orange">
          <div class="hero-body">
            <div class="container has-text-centered">
              <h1 class="title">
                Title
              </h1>
              <h2 class="subtitle">
                Subtitle
              </h2>
            </div>
          </div>
          <!-- Hero footer: will stick at the bottom -->
          <div class="hero-foot">
            <nav class="tabs">
              <div class="container">
                <ul>
                  <li class="is-active">
                    <a>Overview</a>
                  </li>
                  <li>
                    <a>Modifiers</a>
                  </li>
                  <li>
                    <a>Grid</a>
                  </li>
                  <li>
                    <a>Elements</a>
                  </li>
                  <li>
                    <a>Components</a>
                  </li>
                  <li>
                    <a>Layout</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </section>
      <br>

      <section>
        <div>
          <nav class="navbar is-red">
            <div class="container">
              <div class="navbar-brand">
                <a class="navbar-item">
                  <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
                </a>
                <span class="navbar-burger burger" data-target="navbarMenuHero11">
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              <div id="navbarMenuHero11" class="navbar-menu">
                <div class="navbar-end">
                  <a class="navbar-item is-active">
                    Home
                  </a>
                  <a class="navbar-item">
                    Examples
                  </a>
                  <a class="navbar-item">
                    Documentation
                  </a>
                  <div class="navbar-item has-dropdown is-hoverable">
                    <div class="navbar-link">
                      More
                    </div>
                    <div id="moreDropdown" class="navbar-dropdown ">
                      <a class="navbar-item " href="#">
                        <div class="level is-mobile">
                          <div class="level-left">
                            <div class="level-item">
                              <p>
                                <strong>Extensions</strong>
                                <br>
                                <small>Side projects to enhance Bulma</small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <span class="navbar-item">
                    <a class="button is-primary is-inverted">
                      <span class="icon">
                        <i class="fab fa-github" />
                      </span>
                      <span>Download</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <!-- Hero content: will be in the middle -->
        <div class="hero is-red">
          <div class="hero-body">
            <div class="container has-text-centered">
              <h1 class="title">
                Title
              </h1>
              <h2 class="subtitle">
                Subtitle
              </h2>
            </div>
          </div>
          <!-- Hero footer: will stick at the bottom -->
          <div class="hero-foot">
            <nav class="tabs">
              <div class="container">
                <ul>
                  <li class="is-active">
                    <a>Overview</a>
                  </li>
                  <li>
                    <a>Modifiers</a>
                  </li>
                  <li>
                    <a>Grid</a>
                  </li>
                  <li>
                    <a>Elements</a>
                  </li>
                  <li>
                    <a>Components</a>
                  </li>
                  <li>
                    <a>Layout</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </section>
      <br>
    </section>
    <section id="card" class="section">
      <h1 class="title">
        Cards
      </h1>
      <hr>
      <div class="columns">
        <div class="column">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://source.unsplash.com/random/800x600" alt="Image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image" style="height: 40px; width: 40px;">
                    <img src="https://source.unsplash.com/random/96x96" alt="Image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">
                    John Smith
                  </p>
                  <p class="subtitle is-6">
                    @johnsmith
                  </p>
                </div>
              </div>
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                <a>@bulmaio</a>.
                <a>#css</a>
                <a>#responsive</a>
                <br> <small>11:09 PM - 1 Jan 2016</small>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                Component
              </p>
              <a class="card-header-icon">
                <span class="icon"> <i class="fa fa-angle-down" /> </span>
              </a>
            </header>
            <div class="card-content">
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                <a>@bulmaio</a>.
                <a>#css</a>
                <a>#responsive</a>
                <br> <small>11:09 PM - 1 Jan 2016</small>
              </div>
            </div>
            <footer class="card-footer">
              <a class="card-footer-item">Save</a>
              <a class="card-footer-item">Edit</a>
              <a class="card-footer-item">Delete</a>
            </footer>
          </div>
        </div>
      </div>
    </section>

    <section id="dropdown" class="section">
      <h1 class="title">
        Dropdown
      </h1>
      <hr>
      <div class="columns">
        <div class="column">
          <div class="dropdown is-active">
            <div class="dropdown-trigger">
              <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                <span>Dropdown button</span>
                <span class="icon is-small">
                  <i class="fa fa-angle-down" aria-hidden="true" />
                </span>
              </button>
            </div>
            <div id="dropdown-menu" class="dropdown-menu" role="menu">
              <div class="dropdown-content">
                <a href="#" class="dropdown-item">
                  Dropdown item
                </a>
                <a class="dropdown-item">
                  Other dropdown item
                </a>
                <a href="#" class="dropdown-item is-active">
                  Active dropdown item
                </a>
                <a href="#" class="dropdown-item">
                  Other dropdown item
                </a>
                <hr class="dropdown-divider">
                <a href="#" class="dropdown-item">
                  With a divider
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="dropdown is-active">
            <div class="dropdown-trigger">
              <button class="button is-info" aria-haspopup="true" aria-controls="dropdown-menu2">
                <span>Content</span>
                <span class="icon is-small">
                  <i class="fa fa-angle-down" aria-hidden="true" />
                </span>
              </button>
            </div>
            <div id="dropdown-menu2" class="dropdown-menu" role="menu">
              <div class="dropdown-content">
                <div class="dropdown-item">
                  <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
                </div>
                <hr class="dropdown-divider">
                <div class="dropdown-item">
                  <p>You simply need to use a <code>&lt;div&gt;</code> instead.</p>
                </div>
                <hr class="dropdown-divider">
                <a href="#" class="dropdown-item">
                  This is a link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="level" class="section">
      <h1 class="title">
        Level
      </h1>
      <hr>
      <!-- Main container -->
      <nav class="level">
        <!-- Left side -->
        <div class="level-left">
          <div class="level-item">
            <p class="subtitle is-5">
              <strong>123</strong> posts
            </p>
          </div>
          <div class="level-item">
            <div class="field has-addons">
              <p class="control">
                <input class="input" type="text" placeholder="Find a post">
              </p>
              <p class="control">
                <button class="button">
                  Search
                </button>
              </p>
            </div>
          </div>
        </div>
        <!-- Right side -->
        <div class="level-right">
          <p class="level-item">
            <strong>All</strong>
          </p>
          <p class="level-item">
            <a>Published</a>
          </p>
          <p class="level-item">
            <a>Drafts</a>
          </p>
          <p class="level-item">
            <a>Deleted</a>
          </p>
          <p class="level-item">
            <a class="button is-success">New</a>
          </p>
        </div>
      </nav>
      <hr>
      <nav class="level">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">
              Tweets
            </p>
            <p class="title">
              3,456
            </p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">
              Following
            </p>
            <p class="title">
              123
            </p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">
              Followers
            </p>
            <p class="title">
              456K
            </p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">
              Likes
            </p>
            <p class="title">
              789
            </p>
          </div>
        </div>
      </nav>
      <hr>
      <nav class="level">
        <p class="level-item has-text-centered">
          <a class="link is-info">Home</a>
        </p>
        <p class="level-item has-text-centered">
          <a class="link is-info">Menu</a>
        </p>
        <p class="level-item has-text-centered">
          <img src="https://bulma.io/images/bulma-type.png" alt="" style="height: 30px;">
        </p>
        <p class="level-item has-text-centered">
          <a class="link is-info">Reservations</a>
        </p>
        <p class="level-item has-text-centered">
          <a class="link is-info">Contact</a>
        </p>
      </nav>
      <hr>
      <nav class="level is-mobile">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">
              Tweets
            </p>
            <p class="title">
              3,456
            </p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">
              Following
            </p>
            <p class="title">
              123
            </p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">
              Followers
            </p>
            <p class="title">
              456K
            </p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">
              Likes
            </p>
            <p class="title">
              789
            </p>
          </div>
        </div>
      </nav>
      <hr>
    </section>

    <section id="media" class="section">
      <h1 class="title">
        Media Object
      </h1>
      <hr>
      <article class="media">
        <figure class="media-left">
          <p class="image is-64x64">
            <img src="https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
              <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </div>
          <nav class="level">
            <div class="level-left">
              <a class="level-item">
                <span class="icon is-small"><i class="fa fa-reply" /></span>
              </a>
              <a class="level-item">
                <span class="icon is-small"><i class="fa fa-retweet" /></span>
              </a>
              <a class="level-item">
                <span class="icon is-small"><i class="fa fa-heart" /></span>
              </a>
            </div>
          </nav>
        </div>
        <div class="media-right">
          <button class="delete" />
        </div>
      </article>
      <hr>
      <article class="media">
        <figure class="media-left">
          <p class="image is-64x64">
            <img src="https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg">
          </p>
        </figure>
        <div class="media-content">
          <div class="field">
            <p class="control">
              <textarea class="textarea" placeholder="Add a comment..." />
            </p>
          </div>
          <nav class="level">
            <div class="level-left">
              <div class="level-item">
                <a class="button is-info">Post comment</a>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <label class="checkbox">
                  <input type="checkbox"> Press enter to submit
                </label>
              </div>
            </div>
          </nav>
        </div>
      </article>
      <hr>
      <h4 class="subtitle">
        Nesting
      </h4>
      <article class="media">
        <figure class="media-left">
          <p class="image is-64x64">
            <img src="https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>Barbara Middleton</strong>
              <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
              <br>
              <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
            </p>
          </div>
          <article class="media">
            <figure class="media-left">
              <p class="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png">
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>Sean Brown</strong>
                  <br> Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo feugiat.
                  <br>
                  <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                </p>
              </div>
              <article class="media">
                Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus ullamcorper sit amet nec massa.
              </article>
              <article class="media">
                Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada metus sed pharetra euismod. Cras tellus odio, tincidunt iaculis diam non, porta aliquet tortor.
              </article>
            </div>
          </article>
          <article class="media">
            <figure class="media-left">
              <p class="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png">
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>Kayli Eunice </strong>
                  <br> Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.
                  <br>
                  <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                </p>
              </div>
            </div>
          </article>
        </div>
      </article>
      <article class="media">
        <figure class="media-left">
          <p class="image is-64x64">
            <img src="https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg">
          </p>
        </figure>
        <div class="media-content">
          <div class="field">
            <p class="control">
              <textarea class="textarea" placeholder="Add a comment..." />
            </p>
          </div>
          <div class="field">
            <p class="control">
              <button class="button">
                Post comment
              </button>
            </p>
          </div>
        </div>
      </article>
    </section>

    <section id="menu" class="section">
      <h1 class="title">
        Menu
      </h1>
      <hr>
      <div class="column is-3">
        <aside class="menu">
          <p class="menu-label">
            General
          </p>
          <ul class="menu-list">
            <li>
              <a>Dashboard</a>
            </li>
            <li>
              <a>Customers</a>
            </li>
          </ul>
          <p class="menu-label">
            Administration
          </p>
          <ul class="menu-list">
            <li>
              <a>Team Settings</a>
            </li>
            <li>
              <a class="is-active">Manage Your Team</a>
              <ul>
                <li>
                  <a>Members</a>
                </li>
                <li>
                  <a>Plugins</a>
                </li>
                <li>
                  <a>Add a member</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Invitations</a>
            </li>
            <li>
              <a>Cloud Storage Environment Settings</a>
            </li>
            <li>
              <a>Authentication</a>
            </li>
          </ul>
          <p class="menu-label">
            Transactions
          </p>
          <ul class="menu-list">
            <li>
              <a>Payments</a>
            </li>
            <li>
              <a>Transfers</a>
            </li>
            <li>
              <a>Balance</a>
            </li>
          </ul>
        </aside>
      </div>
    </section>

    <section id="message" class="section">
      <h1 class="title">
        Message
      </h1>
      <hr>
      <div class="columns is-multiline">
        <div class="column is-half">
          <article class="message ">
            <div class="message-header">
              <p>
                Message
              </p>
              <button class="delete" />
            </div>
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>.
            </div>
          </article>
        </div>

        <div class="column is-half">
          <article class="message is-primary">
            <div class="message-header">
              <p>
                Primary
              </p>
              <button class="delete" />
            </div>
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>.
            </div>
          </article>
        </div>

        <div class="column is-half">
          <article class="message is-fuchsia">
            <div class="message-header">
              <p>
                Fuchsia
              </p>
              <button class="delete" />
            </div>
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>.
            </div>
          </article>
        </div>

        <div class="column is-half">
          <article class="message is-info">
            <div class="message-header">
              <p>
                Info
              </p>
              <button class="delete" />
            </div>
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>.
            </div>
          </article>
        </div>

        <div class="column is-half">
          <article class="message is-success">
            <div class="message-header">
              <p>
                Success
              </p>
              <button class="delete" />
            </div>
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>.
            </div>
          </article>
        </div>

        <div class="column is-half">
          <article class="message is-warning">
            <div class="message-header">
              <p>
                Warning
              </p>
              <button class="delete" />
            </div>
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>.
            </div>
          </article>
        </div>

        <div class="column is-half">
          <article class="message is-danger">
            <div class="message-header">
              <p>
                Danger
              </p>
              <button class="delete" />
            </div>
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>.
            </div>
          </article>
        </div>

        <div class="column is-half">
          <article class="message is-yellow">
            <div class="message-header">
              <p>
                Yellow
              </p>
              <button class="delete" />
            </div>
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>.
            </div>
          </article>
        </div>

        <div class="column is-half">
          <article class="message is-beet">
            <div class="message-header">
              <p>
                Black
              </p>
              <button class="delete" />
            </div>
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>.
            </div>
          </article>
        </div>

        <div class="column is-half">
          <article class="message is-orange">
            <div class="message-header">
              <p>
                Orange
              </p>
              <button class="delete" />
            </div>
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>.
            </div>
          </article>
        </div>

        <div class="column is-half">
          <article class="message is-red">
            <div class="message-header">
              <p>
                Red
              </p>
              <button class="delete" />
            </div>
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>.
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="modal" class="section">
      <h1 class="title">
        Modal
      </h1>
      <hr>
      <a class="button is-primary is-large" data-target="#myModal" onclick="$('#myModal').toggleClass('is-active')">Launch example modal</a>
      <div id="myModal" class="modal">
        <div class="modal-background" />
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">
              Modal title
            </p>
            <button class="delete" />
          </header>
          <section class="modal-card-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </section>
          <footer class="modal-card-foot">
            <a class="button is-primary">Save changes</a>
            <a class="button">Cancel</a>
          </footer>
        </div>
      </div>
    </section>

    <section id="navbar" class="section">
      <h1 class="title">
        Navbar
      </h1>
      <hr>

      <nav class="navbar ">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
          </a>
          <a class="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
            <span class="icon" style="color: #333;">
              <i class="fab fa-github" />
            </span>
          </a>
          <a class="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
            <span class="icon" style="color: #55acee;">
              <i class="fab fa-twitter" />
            </span>
          </a>
          <div class="navbar-burger burger" data-target="navMenuExample1">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navMenuExample1" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item " href="#">
              Home
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link  is-active" href="#">
                Docs
              </a>
              <div class="navbar-dropdown ">
                <a class="navbar-item " href="#">
                  Overview
                </a>
                <a class="navbar-item " href="#">
                  Modifiers
                </a>
                <a class="navbar-item " href="#">
                  Grid
                </a>
                <a class="navbar-item " href="#">
                  Form
                </a>
                <a class="navbar-item " href="#">
                  Elements
                </a>
                <a class="navbar-item is-active" href="#">
                  Components
                </a>
                <a class="navbar-item " href="#">
                  Layout
                </a>
                <hr class="navbar-divider">
                <div class="navbar-item">
                  <div>
                    version
                    <p class="has-text-info is-size-6-desktop">
                      0.4.3
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link " href="#blog/">
                Blog
              </a>
              <div id="blogDropdown" class="navbar-dropdown " data-style="width: 18rem;">
                <a class="navbar-item" href="/2017/03/10/new-field-element/">
                  <div class="navbar-content">
                    <p>
                      <small class="has-text-info">10 Mar 2017</small>
                    </p>
                    <p>New field element (for better controls)</p>
                  </div>
                </a>
                <a class="navbar-item" href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/">
                  <div class="navbar-content">
                    <p>
                      <small class="has-text-info">11 Apr 2016</small>
                    </p>
                    <p>Metro UI CSS grid with Bulma tiles</p>
                  </div>
                </a>
                <a class="navbar-item" href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/">
                  <div class="navbar-content">
                    <p>
                      <small class="has-text-info">09 Feb 2016</small>
                    </p>
                    <p>Blog launched, new responsive columns, new helpers</p>
                  </div>
                </a>
                <a class="navbar-item" href="#blog/">
                  More posts
                </a>
                <hr class="navbar-divider">
                <div class="navbar-item">
                  <div class="navbar-content">
                    <div class="level is-mobile">
                      <div class="level-left">
                        <div class="level-item">
                          <strong>Stay up to date!</strong>
                        </div>
                      </div>
                      <div class="level-right">
                        <div class="level-item">
                          <a class="button is-rss is-small" href="#atom.xml">
                            <span class="icon is-small">
                              <i class="fa fa-rss" />
                            </span>
                            <span>Subscribe</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
              <div class="navbar-link">
                More
              </div>
              <div id="moreDropdown" class="navbar-dropdown ">
                <a class="navbar-item " href="#extensions/">
                  <div class="level is-mobile">
                    <div class="level-left">
                      <div class="level-item">
                        <p>
                          <strong>Extensions</strong>
                          <br>
                          <small>Side projects to enhance Bulma</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="navbar-end">
            <a class="navbar-item" href="https://github.com/jgthms/bulma" target="_blank">
              Github
            </a>
            <a class="navbar-item" href="https://twitter.com/jgthms" target="_blank">
              Twitter
            </a>
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a id="twitter" class="button">
                    <span>Tweet</span>
                  </a>
                </p>
                <p class="control">
                  <a class="button is-primary" href="https://github.com/jgthms/bulma/archive/0.4.3.zip">
                    <span class="icon">
                      <i class="fa fa-download" />
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <br>

      <nav class="navbar is-primary">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
          </a>
          <a class="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
            <span class="icon" style="color: #333;">
              <i class="fab fa-github" />
            </span>
          </a>
          <a class="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
            <span class="icon" style="color: #55acee;">
              <i class="fab fa-twitter" />
            </span>
          </a>
          <div class="navbar-burger burger" data-target="navMenuExample2">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navMenuExample2" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item " href="#">
              Home
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link  is-active" href="#">
                Docs
              </a>
              <div class="navbar-dropdown ">
                <a class="navbar-item " href="#">
                  Overview
                </a>
                <a class="navbar-item " href="#">
                  Modifiers
                </a>
                <a class="navbar-item " href="#">
                  Grid
                </a>
                <a class="navbar-item " href="#">
                  Form
                </a>
                <a class="navbar-item " href="#">
                  Elements
                </a>
                <a class="navbar-item is-active" href="#">
                  Components
                </a>
                <a class="navbar-item " href="#">
                  Layout
                </a>
                <hr class="navbar-divider">
                <div class="navbar-item">
                  <div>
                    version
                    <p class="has-text-info is-size-6-desktop">
                      0.4.3
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link " href="#blog/">
                Blog
              </a>
              <div id="blogDropdown" class="navbar-dropdown " data-style="width: 18rem;">
                <a class="navbar-item" href="/2017/03/10/new-field-element/">
                  <div class="navbar-content">
                    <p>
                      <small class="has-text-info">10 Mar 2017</small>
                    </p>
                    <p>New field element (for better controls)</p>
                  </div>
                </a>
                <a class="navbar-item" href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/">
                  <div class="navbar-content">
                    <p>
                      <small class="has-text-info">11 Apr 2016</small>
                    </p>
                    <p>Metro UI CSS grid with Bulma tiles</p>
                  </div>
                </a>
                <a class="navbar-item" href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/">
                  <div class="navbar-content">
                    <p>
                      <small class="has-text-info">09 Feb 2016</small>
                    </p>
                    <p>Blog launched, new responsive columns, new helpers</p>
                  </div>
                </a>
                <a class="navbar-item" href="#blog/">
                  More posts
                </a>
                <hr class="navbar-divider">
                <div class="navbar-item">
                  <div class="navbar-content">
                    <div class="level is-mobile">
                      <div class="level-left">
                        <div class="level-item">
                          <strong>Stay up to date!</strong>
                        </div>
                      </div>
                      <div class="level-right">
                        <div class="level-item">
                          <a class="button is-rss is-small" href="#atom.xml">
                            <span class="icon is-small">
                              <i class="fa fa-rss" />
                            </span>
                            <span>Subscribe</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
              <div class="navbar-link">
                More
              </div>
              <div id="moreDropdown" class="navbar-dropdown ">
                <a class="navbar-item " href="#extensions/">
                  <div class="level is-mobile">
                    <div class="level-left">
                      <div class="level-item">
                        <p>
                          <strong>Extensions</strong>
                          <br>
                          <small>Side projects to enhance Bulma</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="navbar-end">
            <a class="navbar-item" href="https://github.com/jgthms/bulma" target="_blank">
              Github
            </a>
            <a class="navbar-item" href="https://twitter.com/jgthms" target="_blank">
              Twitter
            </a>
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a id="twitter" class="button">
                    <span>Tweet</span>
                  </a>
                </p>
                <p class="control">
                  <a class="button is-primary" href="https://github.com/jgthms/bulma/archive/0.4.3.zip">
                    <span class="icon">
                      <i class="fa fa-download" />
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <br>

      <nav class="navbar is-fuchsia">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
          </a>
          <a class="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
            <span class="icon" style="color: #333;">
              <i class="fab fa-github" />
            </span>
          </a>
          <a class="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
            <span class="icon" style="color: #55acee;">
              <i class="fab fa-twitter" />
            </span>
          </a>
          <div class="navbar-burger burger" data-target="navMenuExample3">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navMenuExample3" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item " href="#">
              Home
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link  is-active" href="#">
                Docs
              </a>
              <div class="navbar-dropdown ">
                <a class="navbar-item " href="#">
                  Overview
                </a>
                <a class="navbar-item " href="#">
                  Modifiers
                </a>
                <a class="navbar-item " href="#">
                  Grid
                </a>
                <a class="navbar-item " href="#">
                  Form
                </a>
                <a class="navbar-item " href="#">
                  Elements
                </a>
                <a class="navbar-item is-active" href="#">
                  Components
                </a>
                <a class="navbar-item " href="#">
                  Layout
                </a>
                <hr class="navbar-divider">
                <div class="navbar-item">
                  <div>
                    version
                    <p class="has-text-info is-size-6-desktop">
                      0.4.3
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link " href="#blog/">
                Blog
              </a>
              <div id="blogDropdown" class="navbar-dropdown " data-style="width: 18rem;">
                <a class="navbar-item" href="/2017/03/10/new-field-element/">
                  <div class="navbar-content">
                    <p>
                      <small class="has-text-info">10 Mar 2017</small>
                    </p>
                    <p>New field element (for better controls)</p>
                  </div>
                </a>
                <a class="navbar-item" href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/">
                  <div class="navbar-content">
                    <p>
                      <small class="has-text-info">11 Apr 2016</small>
                    </p>
                    <p>Metro UI CSS grid with Bulma tiles</p>
                  </div>
                </a>
                <a class="navbar-item" href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/">
                  <div class="navbar-content">
                    <p>
                      <small class="has-text-info">09 Feb 2016</small>
                    </p>
                    <p>Blog launched, new responsive columns, new helpers</p>
                  </div>
                </a>
                <a class="navbar-item" href="#blog/">
                  More posts
                </a>
                <hr class="navbar-divider">
                <div class="navbar-item">
                  <div class="navbar-content">
                    <div class="level is-mobile">
                      <div class="level-left">
                        <div class="level-item">
                          <strong>Stay up to date!</strong>
                        </div>
                      </div>
                      <div class="level-right">
                        <div class="level-item">
                          <a class="button is-rss is-small" href="#atom.xml">
                            <span class="icon is-small">
                              <i class="fa fa-rss" />
                            </span>
                            <span>Subscribe</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
              <div class="navbar-link">
                More
              </div>
              <div id="moreDropdown" class="navbar-dropdown ">
                <a class="navbar-item " href="#extensions/">
                  <div class="level is-mobile">
                    <div class="level-left">
                      <div class="level-item">
                        <p>
                          <strong>Extensions</strong>
                          <br>
                          <small>Side projects to enhance Bulma</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="navbar-end">
            <a class="navbar-item" href="https://github.com/jgthms/bulma" target="_blank">
              Github
            </a>
            <a class="navbar-item" href="https://twitter.com/jgthms" target="_blank">
              Twitter
            </a>
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a id="twitter" class="button">
                    <span>Tweet</span>
                  </a>
                </p>
                <p class="control">
                  <a class="button is-primary" href="https://github.com/jgthms/bulma/archive/0.4.3.zip">
                    <span class="icon">
                      <i class="fa fa-download" />
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <br>

      <nav class="navbar is-info">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
          </a>
          <a class="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
            <span class="icon" style="color: #333;">
              <i class="fab fa-github" />
            </span>
          </a>
          <a class="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
            <span class="icon" style="color: #55acee;">
              <i class="fab fa-twitter" />
            </span>
          </a>
          <div class="navbar-burger burger" data-target="navMenuExample4">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navMenuExample4" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item " href="#">
              Home
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link  is-active" href="#">
                Docs
              </a>
              <div class="navbar-dropdown ">
                <a class="navbar-item " href="#">
                  Overview
                </a>
                <a class="navbar-item " href="#">
                  Modifiers
                </a>
                <a class="navbar-item " href="#">
                  Grid
                </a>
                <a class="navbar-item " href="#">
                  Form
                </a>
                <a class="navbar-item " href="#">
                  Elements
                </a>
                <a class="navbar-item is-active" href="#">
                  Components
                </a>
                <a class="navbar-item " href="#">
                  Layout
                </a>
                <hr class="navbar-divider">
                <div class="navbar-item">
                  <div>
                    version
                    <p class="has-text-info is-size-6-desktop">
                      0.4.3
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link " href="#blog/">
                Blog
              </a>
              <div id="blogDropdown" class="navbar-dropdown " data-style="width: 18rem;">
                <a class="navbar-item" href="/2017/03/10/new-field-element/">
                  <div class="navbar-content">
                    <p>
                      <small class="has-text-info">10 Mar 2017</small>
                    </p>
                    <p>New field element (for better controls)</p>
                  </div>
                </a>
                <a class="navbar-item" href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/">
                  <div class="navbar-content">
                    <p>
                      <small class="has-text-info">11 Apr 2016</small>
                    </p>
                    <p>Metro UI CSS grid with Bulma tiles</p>
                  </div>
                </a>
                <a class="navbar-item" href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/">
                  <div class="navbar-content">
                    <p>
                      <small class="has-text-info">09 Feb 2016</small>
                    </p>
                    <p>Blog launched, new responsive columns, new helpers</p>
                  </div>
                </a>
                <a class="navbar-item" href="#blog/">
                  More posts
                </a>
                <hr class="navbar-divider">
                <div class="navbar-item">
                  <div class="navbar-content">
                    <div class="level is-mobile">
                      <div class="level-left">
                        <div class="level-item">
                          <strong>Stay up to date!</strong>
                        </div>
                      </div>
                      <div class="level-right">
                        <div class="level-item">
                          <a class="button is-rss is-small" href="#atom.xml">
                            <span class="icon is-small">
                              <i class="fa fa-rss" />
                            </span>
                            <span>Subscribe</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
              <div class="navbar-link">
                More
              </div>
              <div id="moreDropdown" class="navbar-dropdown ">
                <a class="navbar-item " href="#extensions/">
                  <div class="level is-mobile">
                    <div class="level-left">
                      <div class="level-item">
                        <p>
                          <strong>Extensions</strong>
                          <br>
                          <small>Side projects to enhance Bulma</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="navbar-end">
            <a class="navbar-item" href="https://github.com/jgthms/bulma" target="_blank">
              Github
            </a>
            <a class="navbar-item" href="https://twitter.com/jgthms" target="_blank">
              Twitter
            </a>
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a id="twitter" class="button">
                    <span>Tweet</span>
                  </a>
                </p>
                <p class="control">
                  <a class="button is-primary" href="https://github.com/jgthms/bulma/archive/0.4.3.zip">
                    <span class="icon">
                      <i class="fa fa-download" />
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <br>

      <nav class="navbar is-success">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
          </a>
          <a class="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
            <span class="icon" style="color: #333;">
              <i class="fab fa-github" />
            </span>
          </a>
          <a class="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
            <span class="icon" style="color: #55acee;">
              <i class="fab fa-twitter" />
            </span>
          </a>
          <div class="navbar-burger burger" data-target="navMenuExample5">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navMenuExample5" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item " href="#">
              Home
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link  is-active" href="#">
                Docs
              </a>
              <div class="navbar-dropdown ">
                <a class="navbar-item " href="#">
                  Overview
                </a>
                <a class="navbar-item " href="#">
                  Modifiers
                </a>
                <a class="navbar-item " href="#">
                  Grid
                </a>
                <a class="navbar-item " href="#">
                  Form
                </a>
                <a class="navbar-item " href="#">
                  Elements
                </a>
                <a class="navbar-item is-active" href="#">
                  Components
                </a>
                <a class="navbar-item " href="#">
                  Layout
                </a>
                <hr class="navbar-divider">
                <div class="navbar-item">
                  <div>
                    version
                    <p class="has-text-info is-size-6-desktop">
                      0.4.3
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link " href="#blog/">
                Blog
              </a>
              <div id="blogDropdown" class="navbar-dropdown " data-style="width: 18rem;">
                <a class="navbar-item" href="/2017/03/10/new-field-element/">
                  <div class="navbar-content">
                    <p>
                      <small class="has-text-info">10 Mar 2017</small>
                    </p>
                    <p>New field element (for better controls)</p>
                  </div>
                </a>
                <a class="navbar-item" href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/">
                  <div class="navbar-content">
                    <p>
                      <small class="has-text-info">11 Apr 2016</small>
                    </p>
                    <p>Metro UI CSS grid with Bulma tiles</p>
                  </div>
                </a>
                <a class="navbar-item" href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/">
                  <div class="navbar-content">
                    <p>
                      <small class="has-text-info">09 Feb 2016</small>
                    </p>
                    <p>Blog launched, new responsive columns, new helpers</p>
                  </div>
                </a>
                <a class="navbar-item" href="#blog/">
                  More posts
                </a>
                <hr class="navbar-divider">
                <div class="navbar-item">
                  <div class="navbar-content">
                    <div class="level is-mobile">
                      <div class="level-left">
                        <div class="level-item">
                          <strong>Stay up to date!</strong>
                        </div>
                      </div>
                      <div class="level-right">
                        <div class="level-item">
                          <a class="button is-rss is-small" href="#atom.xml">
                            <span class="icon is-small">
                              <i class="fa fa-rss" />
                            </span>
                            <span>Subscribe</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
              <div class="navbar-link">
                More
              </div>
              <div id="moreDropdown" class="navbar-dropdown ">
                <a class="navbar-item " href="#extensions/">
                  <div class="level is-mobile">
                    <div class="level-left">
                      <div class="level-item">
                        <p>
                          <strong>Extensions</strong>
                          <br>
                          <small>Side projects to enhance Bulma</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="navbar-end">
            <a class="navbar-item" href="https://github.com/jgthms/bulma" target="_blank">
              Github
            </a>
            <a class="navbar-item" href="https://twitter.com/jgthms" target="_blank">
              Twitter
            </a>
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a id="twitter" class="button">
                    <span>Tweet</span>
                  </a>
                </p>
                <p class="control">
                  <a class="button is-primary" href="https://github.com/jgthms/bulma/archive/0.4.3.zip">
                    <span class="icon">
                      <i class="fa fa-download" />
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <br>

      <nav class="navbar is-warning">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
          </a>
          <a class="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
            <span class="icon" style="color: #333;">
              <i class="fab fa-github" />
            </span>
          </a>
          <a class="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
            <span class="icon" style="color: #55acee;">
              <i class="fab fa-twitter" />
            </span>
          </a>
          <div class="navbar-burger burger" data-target="navMenuExample6">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navMenuExample6" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item " href="#">
              Home
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link  is-active" href="#">
                Docs
              </a>
              <div class="navbar-dropdown ">
                <a class="navbar-item " href="#">
                  Overview
                </a>
                <a class="navbar-item " href="#">
                  Modifiers
                </a>
                <a class="navbar-item " href="#">
                  Grid
                </a>
                <a class="navbar-item " href="#">
                  Form
                </a>
                <a class="navbar-item " href="#">
                  Elements
                </a>
                <a class="navbar-item is-active" href="#">
                  Components
                </a>
                <a class="navbar-item " href="#">
                  Layout
                </a>
                <hr class="navbar-divider">
                <div class="navbar-item">
                  <div>
                    version
                    <p class="has-text-info is-size-6-desktop">
                      0.4.3
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link " href="#blog/">
                Blog
              </a>
              <div id="blogDropdown" class="navbar-dropdown " data-style="width: 18rem;">
                <a class="navbar-item" href="/2017/03/10/new-field-element/">
                  <div class="navbar-content">
                    <p>
                      <small class="has-text-info">10 Mar 2017</small>
                    </p>
                    <p>New field element (for better controls)</p>
                  </div>
                </a>
                <a class="navbar-item" href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/">
                  <div class="navbar-content">
                    <p>
                      <small class="has-text-info">11 Apr 2016</small>
                    </p>
                    <p>Metro UI CSS grid with Bulma tiles</p>
                  </div>
                </a>
                <a class="navbar-item" href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/">
                  <div class="navbar-content">
                    <p>
                      <small class="has-text-info">09 Feb 2016</small>
                    </p>
                    <p>Blog launched, new responsive columns, new helpers</p>
                  </div>
                </a>
                <a class="navbar-item" href="#blog/">
                  More posts
                </a>
                <hr class="navbar-divider">
                <div class="navbar-item">
                  <div class="navbar-content">
                    <div class="level is-mobile">
                      <div class="level-left">
                        <div class="level-item">
                          <strong>Stay up to date!</strong>
                        </div>
                      </div>
                      <div class="level-right">
                        <div class="level-item">
                          <a class="button is-rss is-small" href="#atom.xml">
                            <span class="icon is-small">
                              <i class="fa fa-rss" />
                            </span>
                            <span>Subscribe</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
              <div class="navbar-link">
                More
              </div>
              <div id="moreDropdown" class="navbar-dropdown ">
                <a class="navbar-item " href="#extensions/">
                  <div class="level is-mobile">
                    <div class="level-left">
                      <div class="level-item">
                        <p>
                          <strong>Extensions</strong>
                          <br>
                          <small>Side projects to enhance Bulma</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="navbar-end">
            <a class="navbar-item" href="https://github.com/jgthms/bulma" target="_blank">
              Github
            </a>
            <a class="navbar-item" href="https://twitter.com/jgthms" target="_blank">
              Twitter
            </a>
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a id="twitter" class="button">
                    <span>Tweet</span>
                  </a>
                </p>
                <p class="control">
                  <a class="button is-primary" href="https://github.com/jgthms/bulma/archive/0.4.3.zip">
                    <span class="icon">
                      <i class="fa fa-download" />
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <br>

      <nav class="navbar is-danger">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
          </a>
          <a class="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
            <span class="icon" style="color: #333;">
              <i class="fab fa-github" />
            </span>
          </a>
          <a class="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
            <span class="icon" style="color: #55acee;">
              <i class="fab fa-twitter" />
            </span>
          </a>
          <div class="navbar-burger burger" data-target="navMenuExample7">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navMenuExample7" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item " href="#">
              Home
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link  is-active" href="#">
                Docs
              </a>
              <div class="navbar-dropdown ">
                <a class="navbar-item " href="#">
                  Overview
                </a>
                <a class="navbar-item " href="#">
                  Modifiers
                </a>
                <a class="navbar-item " href="#">
                  Grid
                </a>
                <a class="navbar-item " href="#">
                  Form
                </a>
                <a class="navbar-item " href="#">
                  Elements
                </a>
                <a class="navbar-item is-active" href="#">
                  Components
                </a>
                <a class="navbar-item " href="#">
                  Layout
                </a>
                <hr class="navbar-divider">
                <div class="navbar-item">
                  <div>
                    version
                    <p class="has-text-info is-size-6-desktop">
                      0.4.3
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link " href="#blog/">
                Blog
              </a>
              <div id="blogDropdown" class="navbar-dropdown " data-style="width: 18rem;">
                <a class="navbar-item" href="/2017/03/10/new-field-element/">
                  <div class="navbar-content">
                    <p>
                      <small class="has-text-info">10 Mar 2017</small>
                    </p>
                    <p>New field element (for better controls)</p>
                  </div>
                </a>
                <a class="navbar-item" href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/">
                  <div class="navbar-content">
                    <p>
                      <small class="has-text-info">11 Apr 2016</small>
                    </p>
                    <p>Metro UI CSS grid with Bulma tiles</p>
                  </div>
                </a>
                <a class="navbar-item" href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/">
                  <div class="navbar-content">
                    <p>
                      <small class="has-text-info">09 Feb 2016</small>
                    </p>
                    <p>Blog launched, new responsive columns, new helpers</p>
                  </div>
                </a>
                <a class="navbar-item" href="#blog/">
                  More posts
                </a>
                <hr class="navbar-divider">
                <div class="navbar-item">
                  <div class="navbar-content">
                    <div class="level is-mobile">
                      <div class="level-left">
                        <div class="level-item">
                          <strong>Stay up to date!</strong>
                        </div>
                      </div>
                      <div class="level-right">
                        <div class="level-item">
                          <a class="button is-rss is-small" href="#atom.xml">
                            <span class="icon is-small">
                              <i class="fa fa-rss" />
                            </span>
                            <span>Subscribe</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
              <div class="navbar-link">
                More
              </div>
              <div id="moreDropdown" class="navbar-dropdown ">
                <a class="navbar-item " href="#extensions/">
                  <div class="level is-mobile">
                    <div class="level-left">
                      <div class="level-item">
                        <p>
                          <strong>Extensions</strong>
                          <br>
                          <small>Side projects to enhance Bulma</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="navbar-end">
            <a class="navbar-item" href="https://github.com/jgthms/bulma" target="_blank">
              Github
            </a>
            <a class="navbar-item" href="https://twitter.com/jgthms" target="_blank">
              Twitter
            </a>
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a id="twitter" class="button">
                    <span>Tweet</span>
                  </a>
                </p>
                <p class="control">
                  <a class="button is-primary" href="https://github.com/jgthms/bulma/archive/0.4.3.zip">
                    <span class="icon">
                      <i class="fa fa-download" />
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <br>

      <nav class="navbar is-yellow">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
          </a>
          <a class="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
            <span class="icon" style="color: #333;">
              <i class="fab fa-github" />
            </span>
          </a>
          <a class="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
            <span class="icon" style="color: #55acee;">
              <i class="fab fa-twitter" />
            </span>
          </a>
          <div class="navbar-burger burger" data-target="navMenuExample8">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navMenuExample8" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item " href="#">
              Home
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link  is-active" href="#">
                Docs
              </a>
              <div class="navbar-dropdown ">
                <a class="navbar-item " href="#">
                  Overview
                </a>
                <a class="navbar-item " href="#">
                  Modifiers
                </a>
                <a class="navbar-item " href="#">
                  Grid
                </a>
                <a class="navbar-item " href="#">
                  Form
                </a>
                <a class="navbar-item " href="#">
                  Elements
                </a>
                <a class="navbar-item is-active" href="#">
                  Components
                </a>
                <a class="navbar-item " href="#">
                  Layout
                </a>
                <hr class="navbar-divider">
                <div class="navbar-item">
                  <div>
                    version
                    <p class="has-text-info is-size-6-desktop">
                      0.4.3
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link " href="#blog/">
                Blog
              </a>
              <div id="blogDropdown" class="navbar-dropdown " data-style="width: 18rem;">
                <a class="navbar-item" href="/2017/03/10/new-field-element/">
                  <div class="navbar-content">
                    <p>
                      <small class="has-text-info">10 Mar 2017</small>
                    </p>
                    <p>New field element (for better controls)</p>
                  </div>
                </a>
                <a class="navbar-item" href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/">
                  <div class="navbar-content">
                    <p>
                      <small class="has-text-info">11 Apr 2016</small>
                    </p>
                    <p>Metro UI CSS grid with Bulma tiles</p>
                  </div>
                </a>
                <a class="navbar-item" href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/">
                  <div class="navbar-content">
                    <p>
                      <small class="has-text-info">09 Feb 2016</small>
                    </p>
                    <p>Blog launched, new responsive columns, new helpers</p>
                  </div>
                </a>
                <a class="navbar-item" href="#blog/">
                  More posts
                </a>
                <hr class="navbar-divider">
                <div class="navbar-item">
                  <div class="navbar-content">
                    <div class="level is-mobile">
                      <div class="level-left">
                        <div class="level-item">
                          <strong>Stay up to date!</strong>
                        </div>
                      </div>
                      <div class="level-right">
                        <div class="level-item">
                          <a class="button is-rss is-small" href="#atom.xml">
                            <span class="icon is-small">
                              <i class="fa fa-rss" />
                            </span>
                            <span>Subscribe</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
              <div class="navbar-link">
                More
              </div>
              <div id="moreDropdown" class="navbar-dropdown ">
                <a class="navbar-item " href="#extensions/">
                  <div class="level is-mobile">
                    <div class="level-left">
                      <div class="level-item">
                        <p>
                          <strong>Extensions</strong>
                          <br>
                          <small>Side projects to enhance Bulma</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="navbar-end">
            <a class="navbar-item" href="https://github.com/jgthms/bulma" target="_blank">
              Github
            </a>
            <a class="navbar-item" href="https://twitter.com/jgthms" target="_blank">
              Twitter
            </a>
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a id="twitter" class="button">
                    <span>Tweet</span>
                  </a>
                </p>
                <p class="control">
                  <a class="button is-primary" href="https://github.com/jgthms/bulma/archive/0.4.3.zip">
                    <span class="icon">
                      <i class="fa fa-download" />
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <br>

      <nav class="navbar is-beet">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
          </a>
          <a class="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
            <span class="icon" style="color: #333;">
              <i class="fab fa-github" />
            </span>
          </a>
          <a class="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
            <span class="icon" style="color: #55acee;">
              <i class="fab fa-twitter" />
            </span>
          </a>
          <div class="navbar-burger burger" data-target="navMenuExample9">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navMenuExample9" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item " href="#">
              Home
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link  is-active" href="#">
                Docs
              </a>
              <div class="navbar-dropdown ">
                <a class="navbar-item " href="#">
                  Overview
                </a>
                <a class="navbar-item " href="#">
                  Modifiers
                </a>
                <a class="navbar-item " href="#">
                  Grid
                </a>
                <a class="navbar-item " href="#">
                  Form
                </a>
                <a class="navbar-item " href="#">
                  Elements
                </a>
                <a class="navbar-item is-active" href="#">
                  Components
                </a>
                <a class="navbar-item " href="#">
                  Layout
                </a>
                <hr class="navbar-divider">
                <div class="navbar-item">
                  <div>
                    version
                    <p class="has-text-info is-size-6-desktop">
                      0.4.3
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link " href="#blog/">
                Blog
              </a>
              <div id="blogDropdown" class="navbar-dropdown " data-style="width: 18rem;">
                <a class="navbar-item" href="/2017/03/10/new-field-element/">
                  <div class="navbar-content">
                    <p>
                      <small class="has-text-info">10 Mar 2017</small>
                    </p>
                    <p>New field element (for better controls)</p>
                  </div>
                </a>
                <a class="navbar-item" href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/">
                  <div class="navbar-content">
                    <p>
                      <small class="has-text-info">11 Apr 2016</small>
                    </p>
                    <p>Metro UI CSS grid with Bulma tiles</p>
                  </div>
                </a>
                <a class="navbar-item" href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/">
                  <div class="navbar-content">
                    <p>
                      <small class="has-text-info">09 Feb 2016</small>
                    </p>
                    <p>Blog launched, new responsive columns, new helpers</p>
                  </div>
                </a>
                <a class="navbar-item" href="#blog/">
                  More posts
                </a>
                <hr class="navbar-divider">
                <div class="navbar-item">
                  <div class="navbar-content">
                    <div class="level is-mobile">
                      <div class="level-left">
                        <div class="level-item">
                          <strong>Stay up to date!</strong>
                        </div>
                      </div>
                      <div class="level-right">
                        <div class="level-item">
                          <a class="button is-rss is-small" href="#atom.xml">
                            <span class="icon is-small">
                              <i class="fa fa-rss" />
                            </span>
                            <span>Subscribe</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
              <div class="navbar-link">
                More
              </div>
              <div id="moreDropdown" class="navbar-dropdown ">
                <a class="navbar-item " href="#extensions/">
                  <div class="level is-mobile">
                    <div class="level-left">
                      <div class="level-item">
                        <p>
                          <strong>Extensions</strong>
                          <br>
                          <small>Side projects to enhance Bulma</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="navbar-end">
            <a class="navbar-item" href="https://github.com/jgthms/bulma" target="_blank">
              Github
            </a>
            <a class="navbar-item" href="https://twitter.com/jgthms" target="_blank">
              Twitter
            </a>
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a id="twitter" class="button">
                    <span>Tweet</span>
                  </a>
                </p>
                <p class="control">
                  <a class="button is-primary" href="https://github.com/jgthms/bulma/archive/0.4.3.zip">
                    <span class="icon">
                      <i class="fa fa-download" />
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <br>

      <nav class="navbar is-orange">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
          </a>
          <a class="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
            <span class="icon" style="color: #333;">
              <i class="fab fa-github" />
            </span>
          </a>
          <a class="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
            <span class="icon" style="color: #55acee;">
              <i class="fab fa-twitter" />
            </span>
          </a>
          <div class="navbar-burger burger" data-target="navMenuExample10">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navMenuExample10" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item " href="#">
              Home
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link  is-active" href="#">
                Docs
              </a>
              <div class="navbar-dropdown ">
                <a class="navbar-item " href="#">
                  Overview
                </a>
                <a class="navbar-item " href="#">
                  Modifiers
                </a>
                <a class="navbar-item " href="#">
                  Grid
                </a>
                <a class="navbar-item " href="#">
                  Form
                </a>
                <a class="navbar-item " href="#">
                  Elements
                </a>
                <a class="navbar-item is-active" href="#">
                  Components
                </a>
                <a class="navbar-item " href="#">
                  Layout
                </a>
                <hr class="navbar-divider">
                <div class="navbar-item">
                  <div>
                    version
                    <p class="has-text-info is-size-6-desktop">
                      0.4.3
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link " href="#blog/">
                Blog
              </a>
              <div id="blogDropdown" class="navbar-dropdown " data-style="width: 18rem;">
                <a class="navbar-item" href="/2017/03/10/new-field-element/">
                  <div class="navbar-content">
                    <p>
                      <small class="has-text-info">10 Mar 2017</small>
                    </p>
                    <p>New field element (for better controls)</p>
                  </div>
                </a>
                <a class="navbar-item" href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/">
                  <div class="navbar-content">
                    <p>
                      <small class="has-text-info">11 Apr 2016</small>
                    </p>
                    <p>Metro UI CSS grid with Bulma tiles</p>
                  </div>
                </a>
                <a class="navbar-item" href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/">
                  <div class="navbar-content">
                    <p>
                      <small class="has-text-info">09 Feb 2016</small>
                    </p>
                    <p>Blog launched, new responsive columns, new helpers</p>
                  </div>
                </a>
                <a class="navbar-item" href="#blog/">
                  More posts
                </a>
                <hr class="navbar-divider">
                <div class="navbar-item">
                  <div class="navbar-content">
                    <div class="level is-mobile">
                      <div class="level-left">
                        <div class="level-item">
                          <strong>Stay up to date!</strong>
                        </div>
                      </div>
                      <div class="level-right">
                        <div class="level-item">
                          <a class="button is-rss is-small" href="#atom.xml">
                            <span class="icon is-small">
                              <i class="fa fa-rss" />
                            </span>
                            <span>Subscribe</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
              <div class="navbar-link">
                More
              </div>
              <div id="moreDropdown" class="navbar-dropdown ">
                <a class="navbar-item " href="#extensions/">
                  <div class="level is-mobile">
                    <div class="level-left">
                      <div class="level-item">
                        <p>
                          <strong>Extensions</strong>
                          <br>
                          <small>Side projects to enhance Bulma</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="navbar-end">
            <a class="navbar-item" href="https://github.com/jgthms/bulma" target="_blank">
              Github
            </a>
            <a class="navbar-item" href="https://twitter.com/jgthms" target="_blank">
              Twitter
            </a>
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a id="twitter" class="button">
                    <span>Tweet</span>
                  </a>
                </p>
                <p class="control">
                  <a class="button is-primary" href="https://github.com/jgthms/bulma/archive/0.4.3.zip">
                    <span class="icon">
                      <i class="fa fa-download" />
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <br>

      <nav class="navbar is-red">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
          </a>
          <a class="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
            <span class="icon" style="color: #333;">
              <i class="fab fa-github" />
            </span>
          </a>
          <a class="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
            <span class="icon" style="color: #55acee;">
              <i class="fab fa-twitter" />
            </span>
          </a>
          <div class="navbar-burger burger" data-target="navMenuExample11">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navMenuExample11" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item " href="#">
              Home
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link  is-active" href="#">
                Docs
              </a>
              <div class="navbar-dropdown ">
                <a class="navbar-item " href="#">
                  Overview
                </a>
                <a class="navbar-item " href="#">
                  Modifiers
                </a>
                <a class="navbar-item " href="#">
                  Grid
                </a>
                <a class="navbar-item " href="#">
                  Form
                </a>
                <a class="navbar-item " href="#">
                  Elements
                </a>
                <a class="navbar-item is-active" href="#">
                  Components
                </a>
                <a class="navbar-item " href="#">
                  Layout
                </a>
                <hr class="navbar-divider">
                <div class="navbar-item">
                  <div>
                    version
                    <p class="has-text-info is-size-6-desktop">
                      0.4.3
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link " href="#blog/">
                Blog
              </a>
              <div id="blogDropdown" class="navbar-dropdown " data-style="width: 18rem;">
                <a class="navbar-item" href="/2017/03/10/new-field-element/">
                  <div class="navbar-content">
                    <p>
                      <small class="has-text-info">10 Mar 2017</small>
                    </p>
                    <p>New field element (for better controls)</p>
                  </div>
                </a>
                <a class="navbar-item" href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/">
                  <div class="navbar-content">
                    <p>
                      <small class="has-text-info">11 Apr 2016</small>
                    </p>
                    <p>Metro UI CSS grid with Bulma tiles</p>
                  </div>
                </a>
                <a class="navbar-item" href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/">
                  <div class="navbar-content">
                    <p>
                      <small class="has-text-info">09 Feb 2016</small>
                    </p>
                    <p>Blog launched, new responsive columns, new helpers</p>
                  </div>
                </a>
                <a class="navbar-item" href="#blog/">
                  More posts
                </a>
                <hr class="navbar-divider">
                <div class="navbar-item">
                  <div class="navbar-content">
                    <div class="level is-mobile">
                      <div class="level-left">
                        <div class="level-item">
                          <strong>Stay up to date!</strong>
                        </div>
                      </div>
                      <div class="level-right">
                        <div class="level-item">
                          <a class="button is-rss is-small" href="#atom.xml">
                            <span class="icon is-small">
                              <i class="fa fa-rss" />
                            </span>
                            <span>Subscribe</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
              <div class="navbar-link">
                More
              </div>
              <div id="moreDropdown" class="navbar-dropdown ">
                <a class="navbar-item " href="#extensions/">
                  <div class="level is-mobile">
                    <div class="level-left">
                      <div class="level-item">
                        <p>
                          <strong>Extensions</strong>
                          <br>
                          <small>Side projects to enhance Bulma</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="navbar-end">
            <a class="navbar-item" href="https://github.com/jgthms/bulma" target="_blank">
              Github
            </a>
            <a class="navbar-item" href="https://twitter.com/jgthms" target="_blank">
              Twitter
            </a>
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a id="twitter" class="button">
                    <span>Tweet</span>
                  </a>
                </p>
                <p class="control">
                  <a class="button is-primary" href="https://github.com/jgthms/bulma/archive/0.4.3.zip">
                    <span class="icon">
                      <i class="fa fa-download" />
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <br>

      <h2 class="subtitle">
        Transparent
      </h2>
      <nav class="navbar is-transparent">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
          </a>
          <a class="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
            <span class="icon" style="color: #333;">
              <i class="fab fa-github" />
            </span>
          </a>
          <a class="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
            <span class="icon" style="color: #55acee;">
              <i class="fab fa-twitter" />
            </span>
          </a>
          <div class="navbar-burger burger" data-target="navMenuExamplet">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navMenuExamplet" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item " href="#">
              Home
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link  is-active" href="#">
                Docs
              </a>
              <div class="navbar-dropdown is-boxed">
                <a class="navbar-item " href="#">
                  Overview
                </a>
                <a class="navbar-item " href="#">
                  Discover
                </a>
                <hr class="navbar-divider">
                <div class="navbar-item">
                  <div>
                    version
                    <p class="has-text-info is-size-6-desktop">
                      0.4.3
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="navbar-end">
            <a class="navbar-item" href="https://github.com/jgthms/bulma" target="_blank">
              Github
            </a>
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a id="twitter" class="button">
                    <span>Tweet</span>
                  </a>
                </p>
                <p class="control">
                  <a class="button is-primary" href="https://github.com/jgthms/bulma/archive/0.4.3.zip">
                    <span class="icon">
                      <i class="fa fa-download" />
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>

    <section id="pagination" class="section">
      <h1 class="title">
        Pagination
      </h1>
      <hr>
      <nav class="pagination">
        <a class="pagination-previous is-disabled">Previous</a>
        <a class="pagination-next">Next page</a>
        <ul class="pagination-list">
          <li>
            <a class="pagination-link">1</a>
          </li>
          <li>
            <span class="pagination-ellipsis">…</span>
          </li>
          <li>
            <a class="pagination-link">45</a>
          </li>
          <li>
            <a class="pagination-link is-current">46</a>
          </li>
          <li>
            <a class="pagination-link">47</a>
          </li>
          <li>
            <span class="pagination-ellipsis">…</span>
          </li>
          <li>
            <a class="pagination-link">86</a>
          </li>
        </ul>
      </nav>
      <br>
      <nav class="pagination is-rounded" role="navigation" aria-label="pagination">
        <a class="pagination-previous">Previous</a>
        <a class="pagination-next">Next page</a>
        <ul class="pagination-list">
          <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
          <li><span class="pagination-ellipsis">…</span></li>
          <li><a class="pagination-link" aria-label="Goto page 45">45</a></li>
          <li><a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
          <li><a class="pagination-link" aria-label="Goto page 47">47</a></li>
          <li><span class="pagination-ellipsis">…</span></li>
          <li><a class="pagination-link" aria-label="Goto page 86">86</a></li>
        </ul>
      </nav>
    </section>

    <section id="panel" class="section">
      <h1 class="title">
        Panel
      </h1>
      <hr>
      <div class="column is-4">
        <nav class="panel">
          <p class="panel-heading">
            Repositories
          </p>
          <div class="panel-block">
            <p class="control has-icons-left">
              <input class="input is-small" type="text" placeholder="Search">
              <span class="icon is-small is-left">
                <i class="fa fa-search" />
              </span>
            </p>
          </div>
          <p class="panel-tabs">
            <a class="is-active">All</a>
            <a>Public</a>
            <a>Private</a>
            <a>Sources</a>
            <a>Forks</a>
          </p>
          <a class="panel-block is-active">
            <span class="panel-icon"> <i class="fa fa-book" /> </span> bulma </a>
          <a class="panel-block">
            <span class="panel-icon"> <i class="fa fa-book" /> </span> marksheet </a>
          <a class="panel-block">
            <span class="panel-icon"> <i class="fa fa-book" /> </span> minireset.css </a>
          <a class="panel-block">
            <span class="panel-icon"> <i class="fa fa-book" /> </span> jgthms.github.io </a>
          <a class="panel-block">
            <span class="panel-icon"> <i class="fa fa-code-branch" /> </span> daniellowtw/infBoard </a>
          <a class="panel-block">
            <span class="panel-icon"> <i class="fa fa-code-branch" /> </span> mojs </a>
          <label class="panel-block">
            <input type="checkbox"> Remember me </label>
          <div class="panel-block">
            <button class="button is-primary is-outlined is-fullwidth">
              Reset all filters
            </button>
          </div>
        </nav>
      </div>
    </section>

    <section id="tabs" class="section">
      <h1 class="title">
        Tabs
      </h1>
      <hr>
      <div class="tabs">
        <ul>
          <li class="is-active">
            <a>Pictures</a>
          </li>
          <li>
            <a>Music</a>
          </li>
          <li>
            <a>Videos</a>
          </li>
          <li>
            <a>Documents</a>
          </li>
        </ul>
      </div>
      <br>
      <div class="tabs is-centered">
        <ul>
          <li class="is-active">
            <a>
              <span class="icon is-small"><i class="fa fa-image" /></span>
              <span>Pictures</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon is-small"><i class="fa fa-music" /></span>
              <span>Music</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon is-small"><i class="fa fa-film" /></span>
              <span>Videos</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon is-small"><i class="fa fa-file-alt" /></span>
              <span>Documents</span>
            </a>
          </li>
        </ul>
      </div>
      <br>
      <div class="tabs is-small">
        <ul>
          <li class="is-active">
            <a>Pictures</a>
          </li>
          <li>
            <a>Music</a>
          </li>
          <li>
            <a>Videos</a>
          </li>
          <li>
            <a>Documents</a>
          </li>
        </ul>
      </div>
      <br>
      <div class="tabs is-medium">
        <ul>
          <li class="is-active">
            <a>Pictures</a>
          </li>
          <li>
            <a>Music</a>
          </li>
          <li>
            <a>Videos</a>
          </li>
          <li>
            <a>Documents</a>
          </li>
        </ul>
      </div>
      <br>
      <div class="tabs is-large">
        <ul>
          <li class="is-active">
            <a>Pictures</a>
          </li>
          <li>
            <a>Music</a>
          </li>
          <li>
            <a>Videos</a>
          </li>
          <li>
            <a>Documents</a>
          </li>
        </ul>
      </div>
      <br>
      <div class="tabs is-boxed">
        <ul>
          <li class="is-active">
            <a>
              <span class="icon is-small"><i class="fa fa-image" /></span>
              <span>Pictures</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon is-small"><i class="fa fa-music" /></span>
              <span>Music</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon is-small"><i class="fa fa-film" /></span>
              <span>Videos</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon is-small"><i class="fa fa-file-alt" /></span>
              <span>Documents</span>
            </a>
          </li>
        </ul>
      </div>
      <br>
      <div class="tabs is-toggle">
        <ul>
          <li class="is-active">
            <a>
              <span class="icon is-small"><i class="fa fa-image" /></span>
              <span>Pictures</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon is-small"><i class="fa fa-music" /></span>
              <span>Music</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon is-small"><i class="fa fa-film" /></span>
              <span>Videos</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon is-small"><i class="fa fa-file-alt" /></span>
              <span>Documents</span>
            </a>
          </li>
        </ul>
      </div>
      <br>
      <div class="tabs is-toggle is-toggle-rounded">
        <ul>
          <li class="is-active">
            <a>
              <span class="icon is-small"><i class="fa fa-image" /></span>
              <span>Pictures</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon is-small"><i class="fa fa-music" /></span>
              <span>Music</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon is-small"><i class="fa fa-film" /></span>
              <span>Videos</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon is-small"><i class="fa fa-file-alt" /></span>
              <span>Documents</span>
            </a>
          </li>
        </ul>
      </div>
      <br>
      <div class="tabs is-fullwidth">
        <ul>
          <li>
            <a>
              <span class="icon"><i class="fa fa-angle-left" /></span>
              <span>Left</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon"><i class="fa fa-angle-up" /></span>
              <span>Up</span>
            </a>
          </li>
          <li>
            <a>
              <span>Right</span>
              <span class="icon"><i class="fa fa-angle-right" /></span>
            </a>
          </li>
        </ul>
      </div>
      <br>
      <div class="tabs is-centered is-boxed">
        <ul>
          <li class="is-active">
            <a>
              <span class="icon is-small"><i class="fa fa-image" /></span>
              <span>Pictures</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon is-small"><i class="fa fa-music" /></span>
              <span>Music</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon is-small"><i class="fa fa-film" /></span>
              <span>Videos</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon is-small"><i class="fa fa-file-alt" /></span>
              <span>Documents</span>
            </a>
          </li>
        </ul>
      </div>
      <br>
      <div class="tabs is-toggle is-fullwidth is-large">
        <ul>
          <li class="is-active">
            <a>
              <span class="icon"><i class="fa fa-image" /></span>
              <span>Pictures</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon"><i class="fa fa-music" /></span>
              <span>Music</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon"><i class="fa fa-film" /></span>
              <span>Videos</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon"><i class="fa fa-file-alt" /></span>
              <span>Documents</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Theme'
}
</script>

<style scoped>

</style>
