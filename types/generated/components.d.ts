import type { Schema, Struct } from '@strapi/strapi';

export interface BlockRichText extends Struct.ComponentSchema {
  collectionName: 'components_block_rich_texts';
  info: {
    displayName: 'richText';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

export interface BlockSpoiler extends Struct.ComponentSchema {
  collectionName: 'components_block_spoilers';
  info: {
    displayName: 'spoiler';
  };
  attributes: {
    content: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlockTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_block_testimonials';
  info: {
    displayName: 'testimonial';
  };
  attributes: {
    authorName: Schema.Attribute.String;
    photo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    quote: Schema.Attribute.Text;
  };
}

export interface ElementsLinks extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Links';
  };
  attributes: {
    href: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_logo_links';
  info: {
    displayName: 'logoLink';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    logoLink: Schema.Attribute.Component<'elements.logo-link', false>;
    topnav: Schema.Attribute.Component<'elements.links', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'block.rich-text': BlockRichText;
      'block.spoiler': BlockSpoiler;
      'block.testimonial': BlockTestimonial;
      'elements.links': ElementsLinks;
      'elements.logo-link': ElementsLogoLink;
      'layout.header': LayoutHeader;
    }
  }
}
