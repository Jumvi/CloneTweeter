import React from 'react';
import phoprofil from '../images/profile-photo.png'
import verified from '../images/Verified.png'
import tweetimage from '../images/tweet-image.png'
import imagetweeter from '../images/imagetweeter.png'
import cnn from '../images/tweet-profile-photo.png'
import retweet from '../images/Retweet.png';
import coeur from '../images/coeur.png';
import share from '../images/Share.png';
import { FaRegComment } from "react-icons/fa6";
import { IoShareOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import coment from '../images/comment.png';

const date = new Date();
const comment= share;
const tinda= share;
const bookmark = share;

 export const profildata=   [{
        text: 'je suis l\'auteur de ce tweet de la france à la rdc je suis l\'auteur de ce tweet de la france à la rdcje suis l\'auteur de ce tweet de la france à la rdcje suis l\'auteur de ce tweet de la france à la rdcje suis l\'auteur de ce tweet de la france à la rdcje suis l\'auteur de ce tweet de la france à la rdcje suis l\'auteur de ce tweet de la france à la rdcje suis l\'auteur de ce tweet de la france à la rdcje suis l\'auteur de ce tweet de la france à la rdc',
        src:phoprofil,
        pseudo:'@cnn1',
        author:'CNN',
        verifiedIcon:verified,
        hour:'il ya 1h',
        imgContent:null,
        isCert:false,
        id:1,
        description:'personalité public et chef d\'entreprise',
        following:'150 K following',
        follower:'250 K  followers',
        like:coeur,
        comment: comment,
        share:tinda,
        bookmark:bookmark
       },
       {
        text: 'je suis l\'auteur de ce tweet',
        src:imagetweeter,
        pseudo:'@cnn1',
        author:'CNN',
        verifiedIcon:verified,
        hour:'il ya 1h',
        imgContent:tweetimage,
        isCert: true,
        id:2,
        description:'personalité public et chef d\'entreprise',
        like:coeur,
        comment: comment,
        share:tinda,
        bookmark:bookmark
       },
       {
        text: 'je suis l\'auteur de ce tweet',
        src:cnn,
        pseudo:'@cnn1',
        author:'CNN',
        verifiedIcon:verified,
        hour:'il ya 1h',
        imgContent:tweetimage,
        isCert:true,
        id:3,
        description:'personalité public et chef d\'entreprise',
        like:coeur,
        comment: comment,
        share:tinda,
        bookmark:bookmark
       },
       {
        text: 'je suis l\'auteur de ce tweet',
        src:phoprofil,
        pseudo:'@cnn1',
        author:'CNN',
        verifiedIcon:verified,
        hour:'il ya 1h',
        imgContent:tweetimage,
        isCert:false,
        id:4,
        description:'personalité public et chef d\'entreprise',
        like:coeur,
        comment: comment,
        share:tinda,
        bookmark:bookmark
       }];


