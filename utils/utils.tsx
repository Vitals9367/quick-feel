import { redirect } from "next/navigation";
import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaThreads, FaTwitter, FaXTwitter, FaYoutube } from "react-icons/fa6";


/**
 * Redirects to a specified path with an encoded message as a query parameter.
 * @param {('error' | 'success')} type - The type of message, either 'error' or 'success'.
 * @param {string} path - The path to redirect to.
 * @param {string} message - The message to be encoded and added as a query parameter.
 * @returns {never} This function doesn't return as it triggers a redirect.
 */
export function encodedRedirect(
  type: "error" | "success",
  path: string,
  message: string,
) {
  return redirect(`${path}?${type}=${encodeURIComponent(message)}`);
}

export const getPlatformIconByName = (platformName: string): JSX.Element | null => {
    switch (platformName) {
        case 'facebook': {
            return <FaFacebook size={24} className='min-w-fit' />;
        }
        case 'github': {
            return <FaGithub size={24} className='min-w-fit' />;
        }
        case 'instagram': {
            return <FaInstagram size={24} className='min-w-fit' />;
        }
        case 'linkedin': {
            return <FaLinkedin size={24} className='min-w-fit' />;
        }
        case 'threads': {
            return <FaThreads size={24} className='min-w-fit' />;
        }
        case 'twitter': {
            return <FaTwitter size={24} className='min-w-fit' />;
        } 
        case 'youtube': {
            return <FaYoutube size={24} className='min-w-fit' />;
        }
        case 'x': {
            return <FaXTwitter size={24} className='min-w-fit' />;
        }
        default:
            console.log('Platform name not supported, no icon is returned:', platformName);
            return null;
    }
}