import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'madness-cast',
  styleUrl: 'madness-cast.css',
  shadow: true
})
export class MadnessCast {

  @Prop() episode: string;

  render() {
    return (
      <div>
        <iframe
          src={this.episode}
          width="628"
          height="360"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </div>
    );
  }
}
