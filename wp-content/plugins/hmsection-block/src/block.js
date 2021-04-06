import { registerBlockType } from '@wordpress/blocks';

const homeBlock = <div className="homepage-section-block"><h1 className="title">Headline</h1><p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in dui sapien. Donec tincidunt diam in libero porttitor, quis feugiat diam mollis.
</p><button>Read More</button></div>;

registerBlockType('bshelling/hm-section-block',{
    title: 'Homepage Section Block',
    description: 'The copy section is for use on the homepage',
    icon: 'text',
    category: 'layout',
    edit: function(){
        return (homeBlock);
    },
    save: function(){
        return (homeBlock);
    }
});