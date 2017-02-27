import React, { PropTypes } from 'react'

function SiteTitle(props) {
    return (
        <div className="PageHeader__title">

            <svg width="217px" height="39px" viewBox="1 3 217 39" version="1.1">
                <path
                    d="M5.376,41.408 C9.72,41.408 12.504,38.912 12.504,35.576 C12.504,32.552 9.6,31.184 7.896,30.896 C7.848,30.872 7.848,30.848 7.896,30.824 C9.36,30.272 11.208,28.856 11.208,26.48 C11.208,24.968 10.2,22.592 6.264,22.592 C5.112,22.592 4.272,22.76 3.456,22.976 C2.952,23.096 2.544,23.216 2.256,23.264 C2.064,23.312 2.04,23.48 2.04,23.744 C2.04,24.296 2.112,25.328 2.136,26.168 C2.136,26.432 2.232,26.504 2.304,26.504 C2.424,26.504 2.472,26.432 2.496,26.144 C2.568,24.44 3.456,23.36 5.544,23.36 C8.472,23.36 9.192,25.424 9.192,27.08 C9.192,29.432 7.8,30.656 5.472,30.848 C4.896,30.92 4.608,30.992 4.608,31.136 C4.608,31.304 4.848,31.376 5.448,31.4 C7.872,31.52 10.32,32.936 10.32,36.176 C10.32,39.08 8.304,40.592 5.784,40.592 C3.288,40.592 2.088,39.488 1.992,37.592 C1.968,37.232 1.92,37.208 1.824,37.208 C1.728,37.208 1.68,37.28 1.632,37.544 C1.56,38.072 1.488,39.2 1.512,40.016 C1.536,40.304 1.608,40.568 1.968,40.76 C2.616,41.096 3.792,41.408 5.376,41.408 Z M20.472,30.536 C20.4,30.536 20.328,30.512 20.328,30.392 L20.328,29.888 C20.328,26.144 20.328,25.472 20.376,24.704 C20.424,23.864 20.616,23.456 21.264,23.336 C21.552,23.288 21.696,23.264 21.864,23.264 C21.96,23.264 22.056,23.216 22.056,23.12 C22.056,22.976 21.936,22.928 21.672,22.928 C20.952,22.928 19.44,23 19.32,23 C19.2,23 17.688,22.928 16.608,22.928 C16.344,22.928 16.224,22.976 16.224,23.12 C16.224,23.216 16.32,23.264 16.416,23.264 C16.632,23.264 17.04,23.288 17.232,23.336 C18.024,23.504 18.216,23.888 18.264,24.704 C18.312,25.472 18.312,26.144 18.312,29.888 L18.312,34.112 C18.312,36.416 18.312,38.312 18.192,39.32 C18.096,40.016 17.976,40.544 17.496,40.64 C17.28,40.688 16.992,40.736 16.776,40.736 C16.632,40.736 16.584,40.808 16.584,40.88 C16.584,41.024 16.704,41.072 16.968,41.072 C17.688,41.072 19.2,41 19.32,41 C19.44,41 20.952,41.072 22.272,41.072 C22.536,41.072 22.656,41 22.656,40.88 C22.656,40.808 22.608,40.736 22.464,40.736 C22.248,40.736 21.72,40.688 21.384,40.64 C20.664,40.544 20.52,40.016 20.448,39.32 C20.328,38.312 20.328,36.416 20.328,34.112 L20.328,31.592 C20.328,31.472 20.4,31.448 20.472,31.448 L30.648,31.448 C30.72,31.448 30.792,31.496 30.792,31.592 L30.792,34.112 C30.792,36.416 30.792,38.312 30.672,39.32 C30.576,40.016 30.456,40.544 29.976,40.64 C29.76,40.688 29.472,40.736 29.256,40.736 C29.112,40.736 29.064,40.808 29.064,40.88 C29.064,41.024 29.184,41.072 29.448,41.072 C30.168,41.072 31.68,41 31.8,41 C31.92,41 33.432,41.072 34.752,41.072 C35.016,41.072 35.136,41 35.136,40.88 C35.136,40.808 35.088,40.736 34.944,40.736 C34.728,40.736 34.2,40.688 33.864,40.64 C33.144,40.544 33,40.016 32.928,39.32 C32.808,38.312 32.808,36.416 32.808,34.112 L32.808,29.888 C32.808,26.144 32.808,25.472 32.856,24.704 C32.904,23.864 33.096,23.456 33.744,23.336 C34.032,23.288 34.176,23.264 34.344,23.264 C34.44,23.264 34.536,23.216 34.536,23.12 C34.536,22.976 34.416,22.928 34.152,22.928 C33.432,22.928 31.92,23 31.8,23 C31.68,23 30.168,22.928 29.088,22.928 C28.824,22.928 28.704,22.976 28.704,23.12 C28.704,23.216 28.8,23.264 28.896,23.264 C29.112,23.264 29.52,23.288 29.712,23.336 C30.504,23.504 30.696,23.888 30.744,24.704 C30.792,25.472 30.792,26.144 30.792,29.888 L30.792,30.392 C30.792,30.512 30.72,30.536 30.648,30.536 L20.472,30.536 Z M47.328,33.992 L42.168,33.992 C42.048,33.992 41.976,34.064 41.928,34.184 L40.488,38.432 C40.272,39.032 40.152,39.608 40.152,40.04 C40.152,40.52 40.608,40.736 41.016,40.736 L41.232,40.736 C41.472,40.736 41.544,40.784 41.544,40.88 C41.544,41.024 41.328,41.072 41.112,41.072 C40.536,41.072 39.576,41 39.312,41 C39.048,41 37.728,41.072 36.6,41.072 C36.288,41.072 36.144,41.024 36.144,40.88 C36.144,40.784 36.264,40.736 36.48,40.736 C36.648,40.736 36.864,40.712 37.056,40.688 C38.16,40.544 38.64,39.632 39.072,38.432 L44.52,23.528 C44.808,22.736 44.904,22.592 45.048,22.592 C45.192,22.592 45.288,22.712 45.576,23.456 C45.936,24.368 49.704,34.28 51.168,37.928 C52.032,40.064 52.728,40.448 53.232,40.592 C53.592,40.712 53.976,40.736 54.168,40.736 C54.312,40.736 54.432,40.76 54.432,40.88 C54.432,41.024 54.216,41.072 53.952,41.072 C53.592,41.072 51.84,41.072 50.184,41.024 C49.728,41 49.464,41 49.464,40.856 C49.464,40.76 49.536,40.712 49.632,40.688 C49.776,40.64 49.92,40.424 49.776,40.04 L47.544,34.136 C47.496,34.04 47.448,33.992 47.328,33.992 Z M42.432,33.128 L47.016,33.128 C47.136,33.128 47.136,33.056 47.112,32.96 L44.832,26.48 C44.712,26.12 44.592,26.12 44.472,26.48 L42.36,32.96 C42.312,33.08 42.36,33.128 42.432,33.128 Z M59.568,29.888 C59.568,26.144 59.568,25.472 59.616,24.704 C59.664,23.864 59.856,23.384 60.504,23.312 C60.744,23.288 60.768,23.288 61.032,23.264 C61.248,23.24 61.296,23.192 61.296,23.096 C61.296,22.976 61.176,22.928 60.912,22.928 C60.192,22.928 58.68,23 58.56,23 C58.44,23 56.832,22.928 56.04,22.928 C55.776,22.928 55.656,22.976 55.656,23.12 C55.656,23.216 55.728,23.264 55.92,23.264 C56.088,23.264 56.52,23.288 56.784,23.36 C57.312,23.48 57.552,23.888 57.6,24.704 C57.648,25.472 57.648,26.144 57.648,29.888 L57.648,34.112 C57.648,36.416 57.648,38.312 57.528,39.32 C57.432,40.016 57.288,40.568 56.808,40.664 C56.592,40.712 56.328,40.736 56.184,40.736 C55.968,40.736 55.92,40.832 55.92,40.904 C55.92,41.048 56.04,41.072 56.304,41.072 C57.024,41.072 58.44,41 58.56,41 C58.68,41 60.192,41.072 61.512,41.072 C61.776,41.072 61.872,41.024 61.872,40.904 C61.872,40.832 61.8,40.736 61.584,40.736 C61.44,40.736 60.96,40.688 60.624,40.64 C59.904,40.544 59.76,40.016 59.688,39.32 C59.568,38.312 59.568,36.416 59.568,34.112 L59.568,31.64 C61.68,34.16 66,38.792 67.44,39.92 C68.568,40.808 69.12,41.072 71.208,41.072 L72.984,41.072 C73.248,41.072 73.344,41.024 73.344,40.904 C73.344,40.784 73.2,40.736 73.008,40.736 C72.768,40.736 72.528,40.712 72.312,40.664 C71.16,40.448 70.32,39.92 68.352,38.072 C67.224,37.016 62.856,32.576 61.344,30.92 C61.968,30.224 64.704,27.512 66.816,25.472 C68.256,24.08 68.712,23.792 69.312,23.552 C69.648,23.408 70.08,23.312 70.536,23.264 C70.752,23.24 70.8,23.192 70.8,23.096 C70.8,23 70.728,22.928 70.392,22.928 C70.008,22.928 68.592,23 67.848,23 C67.032,23 67.104,22.928 66.408,22.928 C66.192,22.928 66.048,22.976 66.048,23.072 C66.048,23.168 66.096,23.216 66.264,23.288 C66.456,23.36 66.576,23.552 66.576,23.744 C66.576,24.032 66.48,24.272 65.04,25.76 C63.576,27.272 60.312,30.704 59.568,31.424 L59.568,29.888 Z M85.92,29.888 L85.92,31.424 C86.664,30.704 89.928,27.272 91.392,25.76 C92.832,24.272 92.928,24.032 92.928,23.744 C92.928,23.552 92.808,23.36 92.616,23.288 C92.448,23.216 92.4,23.168 92.4,23.072 C92.4,22.976 92.544,22.928 92.76,22.928 C93.456,22.928 93.384,23 94.2,23 C94.944,23 96.36,22.928 96.744,22.928 C97.08,22.928 97.152,23 97.152,23.096 C97.152,23.192 97.104,23.24 96.888,23.264 C96.432,23.312 96,23.408 95.664,23.552 C95.064,23.792 94.608,24.08 93.168,25.472 C91.056,27.512 88.32,30.224 87.696,30.92 C89.208,32.576 93.576,37.016 94.704,38.072 C96.672,39.92 97.512,40.448 98.664,40.664 C98.88,40.712 99.12,40.736 99.36,40.736 C99.552,40.736 99.696,40.784 99.696,40.904 C99.696,41.024 99.6,41.072 99.336,41.072 L97.56,41.072 C95.472,41.072 94.92,40.808 93.792,39.92 C92.352,38.792 88.032,34.16 85.92,31.64 L85.92,34.112 C85.92,36.416 85.92,38.312 86.04,39.32 C86.112,40.016 86.256,40.544 86.976,40.64 C87.312,40.688 87.792,40.736 87.936,40.736 C88.152,40.736 88.224,40.832 88.224,40.904 C88.224,41.024 88.128,41.072 87.864,41.072 C86.544,41.072 85.032,41 84.912,41 C84.792,41 83.376,41.072 82.656,41.072 C82.392,41.072 82.272,41.048 82.272,40.904 C82.272,40.832 82.32,40.736 82.536,40.736 C82.68,40.736 82.944,40.712 83.16,40.664 C83.64,40.568 83.784,40.016 83.88,39.32 C84,38.312 84,36.416 84,34.112 L84,29.888 C84,26.144 84,25.472 83.952,24.704 C83.904,23.888 83.664,23.48 83.136,23.36 C82.872,23.288 82.44,23.264 82.272,23.264 C82.08,23.264 82.008,23.216 82.008,23.12 C82.008,22.976 82.128,22.928 82.392,22.928 C83.184,22.928 84.792,23 84.912,23 C85.032,23 86.544,22.928 87.264,22.928 C87.528,22.928 87.648,22.976 87.648,23.096 C87.648,23.192 87.6,23.24 87.384,23.264 C87.12,23.288 87.096,23.288 86.856,23.312 C86.208,23.384 86.016,23.864 85.968,24.704 C85.92,25.472 85.92,26.144 85.92,29.888 Z M109.344,33.992 L104.184,33.992 C104.064,33.992 103.992,34.064 103.944,34.184 L102.504,38.432 C102.288,39.032 102.168,39.608 102.168,40.04 C102.168,40.52 102.624,40.736 103.032,40.736 L103.248,40.736 C103.488,40.736 103.56,40.784 103.56,40.88 C103.56,41.024 103.344,41.072 103.128,41.072 C102.552,41.072 101.592,41 101.328,41 C101.064,41 99.744,41.072 98.616,41.072 C98.304,41.072 98.16,41.024 98.16,40.88 C98.16,40.784 98.28,40.736 98.496,40.736 C98.664,40.736 98.88,40.712 99.072,40.688 C100.176,40.544 100.656,39.632 101.088,38.432 L106.536,23.528 C106.824,22.736 106.92,22.592 107.064,22.592 C107.208,22.592 107.304,22.712 107.592,23.456 C107.952,24.368 111.72,34.28 113.184,37.928 C114.048,40.064 114.744,40.448 115.248,40.592 C115.608,40.712 115.992,40.736 116.184,40.736 C116.328,40.736 116.448,40.76 116.448,40.88 C116.448,41.024 116.232,41.072 115.968,41.072 C115.608,41.072 113.856,41.072 112.2,41.024 C111.744,41 111.48,41 111.48,40.856 C111.48,40.76 111.552,40.712 111.648,40.688 C111.792,40.64 111.936,40.424 111.792,40.04 L109.56,34.136 C109.512,34.04 109.464,33.992 109.344,33.992 Z M104.448,33.128 L109.032,33.128 C109.152,33.128 109.152,33.056 109.128,32.96 L106.848,26.48 C106.728,26.12 106.608,26.12 106.488,26.48 L104.376,32.96 C104.328,33.08 104.376,33.128 104.448,33.128 Z M126.984,29.888 L126.984,34.112 C126.984,36.416 126.984,38.312 127.104,39.32 C127.176,40.016 127.32,40.544 128.04,40.64 C128.376,40.688 128.904,40.736 129.12,40.736 C129.264,40.736 129.312,40.808 129.312,40.88 C129.312,41 129.192,41.072 128.928,41.072 C127.608,41.072 126.096,41 125.976,41 C125.856,41 124.344,41.072 123.624,41.072 C123.36,41.072 123.24,41.024 123.24,40.88 C123.24,40.808 123.288,40.736 123.432,40.736 C123.648,40.736 123.936,40.688 124.152,40.64 C124.632,40.544 124.752,40.016 124.848,39.32 C124.968,38.312 124.968,36.416 124.968,34.04 L124.968,31.928 C123.864,32.432 122.448,32.624 121.152,32.624 C119.088,32.624 117.624,32.072 116.688,30.968 C116.208,30.392 115.68,29.576 115.68,27.224 C115.68,26.192 115.704,25.376 115.656,24.608 C115.608,23.696 115.44,23.408 114.792,23.312 C114.552,23.288 114.432,23.288 114.168,23.264 C113.88,23.216 113.88,23.12 113.88,23.072 C113.88,22.952 114.048,22.928 114.312,22.928 C115.2,22.928 116.28,23 116.616,23 C116.976,23 118.464,22.928 118.992,22.928 C119.28,22.928 119.376,22.976 119.376,23.096 C119.376,23.144 119.304,23.24 118.968,23.264 C118.152,23.336 117.768,23.504 117.72,24.728 C117.696,25.568 117.696,26.672 117.696,27.56 C117.696,30.368 119.328,31.664 121.872,31.664 C122.88,31.664 124.032,31.592 124.968,31.184 L124.968,29.48 C124.968,26.048 124.968,25.472 124.92,24.704 C124.872,23.888 124.68,23.504 123.888,23.336 C123.696,23.288 123.288,23.264 123.144,23.264 C122.976,23.264 122.88,23.216 122.88,23.12 C122.88,22.976 123,22.928 123.264,22.928 C124.344,22.928 125.856,23 125.976,23 C126.096,23 127.608,22.928 128.328,22.928 C128.592,22.928 128.712,22.976 128.712,23.12 C128.712,23.216 128.616,23.264 128.52,23.264 C128.352,23.264 128.208,23.288 127.92,23.336 C127.272,23.456 127.08,23.864 127.032,24.704 C126.984,25.472 126.984,26.144 126.984,29.888 Z M135.312,34.112 C135.312,36.248 135.288,37.472 135.264,38.408 C135.216,40.208 134.904,40.544 134.4,40.664 C134.232,40.712 134.088,40.712 133.848,40.736 C133.704,40.76 133.584,40.808 133.584,40.88 C133.584,41.024 133.704,41.072 133.968,41.072 C134.592,41.096 135.168,41 135.744,41 C136.68,41 137.784,41.048 138.744,41.072 C139.68,41.096 140.472,41.144 142.248,41.144 C143.184,41.144 143.376,41.144 143.544,40.52 C143.664,40.016 143.856,38.384 143.856,38.192 C143.856,38.024 143.856,37.832 143.712,37.832 C143.592,37.832 143.544,37.928 143.496,38.192 C143.304,39.224 143.04,39.728 142.272,39.968 C141.624,40.16 140.832,40.184 140.112,40.184 C139.176,40.184 138.528,40.136 138.12,39.968 C137.52,39.728 137.376,39.2 137.328,38.216 C137.304,37.712 137.328,34.928 137.328,34.112 L137.328,32 C137.328,31.904 137.376,31.832 137.496,31.832 C137.904,31.832 140.28,31.88 140.928,31.952 C141.792,32.048 142.08,32.384 142.176,32.744 C142.248,32.96 142.272,33.2 142.272,33.416 C142.272,33.608 142.296,33.8 142.44,33.8 C142.536,33.8 142.584,33.68 142.608,33.44 C142.632,33.104 142.632,32.552 142.704,31.808 C142.776,31.016 142.896,30.608 142.896,30.464 C142.896,30.32 142.848,30.272 142.776,30.272 C142.68,30.272 142.608,30.368 142.488,30.512 C142.248,30.8 141.936,30.872 141.288,30.92 C140.736,30.968 137.784,30.968 137.472,30.968 C137.352,30.968 137.328,30.896 137.328,30.728 L137.328,24.104 C137.328,23.936 137.376,23.864 137.472,23.864 C137.736,23.864 140.352,23.888 140.76,23.936 C141.816,24.032 142.32,24.272 142.488,24.824 C142.56,25.016 142.608,25.304 142.608,25.616 C142.608,25.808 142.656,25.928 142.8,25.928 C142.896,25.928 142.968,25.76 142.992,25.52 C143.04,24.896 143.064,24.44 143.088,24.08 C143.136,23.408 143.28,23.12 143.28,22.952 C143.28,22.832 143.256,22.736 143.184,22.736 C143.112,22.736 143.064,22.76 142.92,22.832 C142.776,22.904 142.344,22.952 141.816,22.976 C141.264,23 136.488,23 136.32,23 C134.808,22.928 134.16,22.928 133.608,22.928 C133.344,22.928 133.224,22.976 133.224,23.12 C133.224,23.216 133.368,23.24 133.536,23.264 C133.752,23.288 134.064,23.288 134.232,23.336 C135.024,23.504 135.216,23.888 135.264,24.704 C135.312,25.472 135.312,26.144 135.312,29.888 L135.312,34.112 Z M158.568,41.408 C160.104,41.408 161.928,41.24 162.888,40.856 C163.32,40.664 163.368,40.616 163.512,40.16 C163.752,39.344 164.04,37.256 164.04,37.088 C164.04,36.896 163.992,36.728 163.872,36.728 C163.728,36.728 163.68,36.824 163.632,37.088 C163.56,37.52 163.248,38.576 162.744,39.104 C161.784,40.088 160.368,40.304 158.568,40.304 C153.432,40.304 149.904,36.104 149.904,31.52 C149.904,29.072 150.312,26.936 152.064,25.256 C152.904,24.44 154.392,23.504 157.584,23.504 C159.696,23.504 161.544,24.152 162.384,24.872 C163.008,25.4 163.392,26.384 163.392,27.32 C163.392,27.656 163.416,27.824 163.584,27.824 C163.728,27.824 163.776,27.68 163.8,27.32 C163.824,26.96 163.824,25.64 163.872,24.848 C163.92,23.984 163.992,23.696 163.992,23.504 C163.992,23.36 163.944,23.264 163.776,23.24 C162.888,23.12 162.144,23.048 161.232,22.88 C160.056,22.664 158.712,22.592 157.752,22.592 C154.056,22.592 151.872,23.72 150.432,25.16 C148.296,27.296 147.744,30.104 147.744,31.712 C147.744,33.992 148.32,36.728 150.648,38.816 C152.544,40.52 154.968,41.408 158.568,41.408 Z M175.824,23.96 C176.832,23.984 177.84,23.984 178.848,24.008 C181.152,24.056 181.728,24.608 181.8,25.328 C181.8,25.424 181.824,25.496 181.824,25.592 C181.848,25.928 181.896,26 182.016,26 C182.112,26 182.184,25.904 182.184,25.688 C182.184,25.424 182.256,23.768 182.256,23.048 C182.256,22.904 182.256,22.76 182.136,22.76 C182.04,22.76 181.824,22.832 181.464,22.88 C181.08,22.952 180.528,23 179.76,23 L170.76,23 C170.472,23 169.56,22.952 168.864,22.88 C168.216,22.832 167.976,22.592 167.808,22.592 C167.712,22.592 167.616,22.904 167.568,23.048 C167.52,23.24 167.04,25.304 167.04,25.544 C167.04,25.688 167.088,25.76 167.16,25.76 C167.256,25.76 167.328,25.712 167.4,25.52 C167.472,25.352 167.544,25.184 167.808,24.776 C168.192,24.2 168.768,24.032 170.256,24.008 C171.432,23.984 172.632,23.984 173.808,23.96 L173.808,34.112 C173.808,36.416 173.808,38.312 173.688,39.32 C173.592,40.016 173.472,40.544 172.992,40.64 C172.776,40.688 172.488,40.736 172.272,40.736 C172.128,40.736 172.08,40.808 172.08,40.88 C172.08,41.024 172.2,41.072 172.464,41.072 C173.184,41.072 174.696,41 174.816,41 C174.936,41 176.448,41.072 177.768,41.072 C178.032,41.072 178.152,41 178.152,40.88 C178.152,40.808 178.104,40.736 177.96,40.736 C177.744,40.736 177.216,40.688 176.88,40.64 C176.16,40.544 176.016,40.016 175.944,39.32 C175.824,38.312 175.824,36.416 175.824,34.112 L175.824,23.96 Z M187.032,34.112 L187.032,29.888 C187.032,26.144 187.032,25.472 186.984,24.704 C186.936,23.888 186.744,23.504 185.952,23.336 C185.76,23.288 185.352,23.264 185.256,23.264 C185.04,23.264 184.944,23.216 184.944,23.12 C184.944,22.976 185.064,22.928 185.328,22.928 C186.408,22.928 187.92,23 188.04,23 C188.616,23 189.552,22.928 190.656,22.928 C194.592,22.928 195.456,25.328 195.456,26.528 C195.456,28.496 194.328,29.672 193.2,30.848 C194.976,31.4 197.352,33.104 197.352,35.912 C197.352,38.48 195.336,41.144 191.232,41.144 C190.968,41.144 190.2,41.096 189.504,41.072 C188.808,41.024 188.136,41 188.04,41 C187.272,41 186.528,41.072 185.688,41.072 C185.424,41.072 185.304,41.024 185.304,40.904 C185.304,40.832 185.352,40.736 185.664,40.736 C185.856,40.736 186.024,40.712 186.24,40.664 C186.72,40.568 186.816,40.016 186.912,39.32 C187.032,38.312 187.032,36.416 187.032,34.112 Z M188.952,23.984 L188.952,30.416 C188.952,30.584 189,30.632 189.12,30.68 C189.264,30.704 189.696,30.776 190.584,30.776 C191.928,30.776 192.264,30.728 192.768,30.152 C193.272,29.576 193.632,28.712 193.632,27.728 C193.632,25.736 192.744,23.6 190.392,23.6 C190.128,23.6 189.624,23.624 189.24,23.72 C189.024,23.768 188.952,23.84 188.952,23.984 Z M188.952,31.592 L188.952,32.96 C188.952,34.808 188.952,37.784 188.976,38.144 C189.048,39.32 189.048,39.656 189.792,40.016 C190.44,40.328 191.472,40.376 191.904,40.376 C193.2,40.376 195.288,39.68 195.288,36.968 C195.288,35.528 194.808,33.44 192.96,32.168 C192.144,31.616 191.544,31.544 190.968,31.472 C190.656,31.424 189.456,31.424 189.096,31.424 C189,31.424 188.952,31.472 188.952,31.592 Z M209.976,33.992 L204.816,33.992 C204.696,33.992 204.624,34.064 204.576,34.184 L203.136,38.432 C202.92,39.032 202.8,39.608 202.8,40.04 C202.8,40.52 203.256,40.736 203.664,40.736 L203.88,40.736 C204.12,40.736 204.192,40.784 204.192,40.88 C204.192,41.024 203.976,41.072 203.76,41.072 C203.184,41.072 202.224,41 201.96,41 C201.696,41 200.376,41.072 199.248,41.072 C198.936,41.072 198.792,41.024 198.792,40.88 C198.792,40.784 198.912,40.736 199.128,40.736 C199.296,40.736 199.512,40.712 199.704,40.688 C200.808,40.544 201.288,39.632 201.72,38.432 L207.168,23.528 C207.456,22.736 207.552,22.592 207.696,22.592 C207.84,22.592 207.936,22.712 208.224,23.456 C208.584,24.368 212.352,34.28 213.816,37.928 C214.68,40.064 215.376,40.448 215.88,40.592 C216.24,40.712 216.624,40.736 216.816,40.736 C216.96,40.736 217.08,40.76 217.08,40.88 C217.08,41.024 216.864,41.072 216.6,41.072 C216.24,41.072 214.488,41.072 212.832,41.024 C212.376,41 212.112,41 212.112,40.856 C212.112,40.76 212.184,40.712 212.28,40.688 C212.424,40.64 212.568,40.424 212.424,40.04 L210.192,34.136 C210.144,34.04 210.096,33.992 209.976,33.992 Z M205.08,33.128 L209.664,33.128 C209.784,33.128 209.784,33.056 209.76,32.96 L207.48,26.48 C207.36,26.12 207.24,26.12 207.12,26.48 L205.008,32.96 C204.96,33.08 205.008,33.128 205.08,33.128 Z"
                    id="ЗНАК-КАЧЕСТВА" stroke="none" fill="#4A4A4A" />
                <path
                    d="M39.316,14 L39.316,4.088 L40.324,4.088 L40.324,8.302 C40.5853346,8.302 40.8349988,8.31133324 41.073,8.33 C41.3110012,8.34866676 41.5466655,8.37199986 41.78,8.4 L45.546,4.088 L46.652,4.088 L42.844,8.638 C44.0106725,8.99266844 44.9136635,9.62032883 45.553,10.521 C46.1923365,11.4216712 46.6193323,12.5813262 46.834,14 L45.728,14 C45.5786659,13.1506624 45.3663347,12.4203364 45.091,11.809 C44.8156653,11.1976636 44.4610022,10.6983353 44.027,10.311 C43.5929978,9.92366473 43.0726697,9.64133422 42.466,9.464 C41.8593303,9.28666578 41.1453374,9.20733324 40.324,9.226 L40.324,14 L39.316,14 Z M48.92,14 L47.814,14 L52.098,4.088 L53.078,4.088 L57.334,14 L56.214,14 L52.56,5.348 L48.92,14 Z M59.546,12.53 L65.314,4.088 L66.574,4.088 L66.574,14 L65.566,14 L65.566,5.474 L65.538,5.474 L59.77,14 L58.51,14 L58.51,4.088 L59.518,4.088 L59.518,12.53 L59.546,12.53 Z M69.206,4.088 L70.214,4.088 L70.214,8.386 L75.618,8.386 L75.618,4.088 L76.626,4.088 L76.626,14 L75.618,14 L75.618,9.31 L70.214,9.31 L70.214,14 L69.206,14 L69.206,4.088 Z M80.294,12.53 L86.062,4.088 L87.322,4.088 L87.322,14 L86.314,14 L86.314,5.474 L86.286,5.474 L80.518,14 L79.258,14 L79.258,4.088 L80.266,4.088 L80.266,12.53 L80.294,12.53 Z M89.954,14 L89.954,4.088 L90.962,4.088 L90.962,8.302 C91.2233346,8.302 91.4729988,8.31133324 91.711,8.33 C91.9490012,8.34866676 92.1846655,8.37199986 92.418,8.4 L96.184,4.088 L97.29,4.088 L93.482,8.638 C94.6486725,8.99266844 95.5516635,9.62032883 96.191,10.521 C96.8303365,11.4216712 97.2573323,12.5813262 97.472,14 L96.366,14 C96.2166659,13.1506624 96.0043347,12.4203364 95.729,11.809 C95.4536653,11.1976636 95.0990022,10.6983353 94.665,10.311 C94.2309978,9.92366473 93.7106697,9.64133422 93.104,9.464 C92.4973303,9.28666578 91.7833374,9.20733324 90.962,9.226 L90.962,14 L89.954,14 Z M99.558,14 L98.452,14 L102.736,4.088 L103.716,4.088 L107.972,14 L106.852,14 L105.76,11.396 L100.636,11.396 L99.558,14 Z M101.014,10.472 L105.382,10.472 L103.198,5.208 L101.014,10.472 Z M112.928,14 L112.928,4.088 L113.936,4.088 L113.936,8.302 C114.197335,8.302 114.446999,8.31133324 114.685,8.33 C114.923001,8.34866676 115.158665,8.37199986 115.392,8.4 L119.158,4.088 L120.264,4.088 L116.456,8.638 C117.622672,8.99266844 118.525663,9.62032883 119.165,10.521 C119.804337,11.4216712 120.231332,12.5813262 120.446,14 L119.34,14 C119.190666,13.1506624 118.978335,12.4203364 118.703,11.809 C118.427665,11.1976636 118.073002,10.6983353 117.639,10.311 C117.204998,9.92366473 116.68467,9.64133422 116.078,9.464 C115.47133,9.28666578 114.757337,9.20733324 113.936,9.226 L113.936,14 L112.928,14 Z M122.602,4.088 L125.402,4.088 C125.906003,4.088 126.363331,4.14166613 126.774,4.249 C127.184669,4.35633387 127.536999,4.51966557 127.831,4.739 C128.125001,4.95833443 128.351333,5.23366501 128.51,5.565 C128.668667,5.89633499 128.748,6.28599776 128.748,6.734 C128.748,7.18200224 128.666334,7.57166501 128.503,7.903 C128.339666,8.23433499 128.111001,8.50966557 127.817,8.729 C127.522999,8.94833443 127.168335,9.11399944 126.753,9.226 C126.337665,9.33800056 125.878003,9.394 125.374,9.394 L123.61,9.394 L123.61,14 L122.602,14 L122.602,4.088 Z M123.61,8.54 L125.318,8.54 C126.111337,8.54 126.713331,8.38600154 127.124,8.078 C127.534669,7.76999846 127.74,7.32200294 127.74,6.734 C127.74,6.11799692 127.527669,5.66766809 127.103,5.383 C126.678331,5.09833191 126.083337,4.956 125.318,4.956 L123.61,4.956 L123.61,8.54 Z M130.652,14 L129.546,14 L133.83,4.088 L134.81,4.088 L139.066,14 L137.946,14 L136.854,11.396 L131.73,11.396 L130.652,14 Z M132.108,10.472 L136.476,10.472 L134.292,5.208 L132.108,10.472 Z M148.866,12.404 C148.697999,12.6560013 148.495001,12.8939989 148.257,13.118 C148.018999,13.3420011 147.743668,13.5379992 147.431,13.706 C147.118332,13.8740008 146.773002,14.0069995 146.395,14.105 C146.016998,14.2030005 145.604002,14.252 145.156,14.252 C144.40933,14.252 143.71867,14.1213346 143.084,13.86 C142.44933,13.5986654 141.903336,13.2370023 141.446,12.775 C140.988664,12.3129977 140.631668,11.7646698 140.375,11.13 C140.118332,10.4953302 139.99,9.80000378 139.99,9.044 C139.99,8.28799622 140.120665,7.59266984 140.382,6.958 C140.643335,6.32333016 141.004998,5.77500231 141.467,5.313 C141.929002,4.85099769 142.474997,4.48933464 143.105,4.228 C143.735003,3.96666536 144.418663,3.836 145.156,3.836 C145.520002,3.836 145.876998,3.87333296 146.227,3.948 C146.577002,4.02266704 146.905998,4.12766599 147.214,4.263 C147.522002,4.39833401 147.801999,4.56166571 148.054,4.753 C148.306001,4.94433429 148.515999,5.16133212 148.684,5.404 L147.844,6.02 C147.741333,5.86133254 147.603668,5.70266746 147.431,5.544 C147.258332,5.38533254 147.055335,5.24533394 146.822,5.124 C146.588665,5.00266606 146.334335,4.90466704 146.059,4.83 C145.783665,4.75533296 145.487335,4.718 145.17,4.718 C144.525997,4.718 143.949669,4.8346655 143.441,5.068 C142.932331,5.3013345 142.500668,5.61633135 142.146,6.013 C141.791332,6.40966865 141.520668,6.86933072 141.334,7.392 C141.147332,7.91466928 141.054,8.46533044 141.054,9.044 C141.054,9.62266956 141.149666,10.1733307 141.341,10.696 C141.532334,11.2186693 141.805332,11.6783314 142.16,12.075 C142.514668,12.4716686 142.946331,12.7866655 143.455,13.02 C143.963669,13.2533345 144.53533,13.37 145.17,13.37 C145.739336,13.37 146.280664,13.2533345 146.794,13.02 C147.307336,12.7866655 147.736665,12.4133359 148.082,11.9 L148.866,12.404 Z M160.402,9.044 C160.402,9.80000378 160.271335,10.4953302 160.01,11.13 C159.748665,11.7646698 159.387002,12.3129977 158.925,12.775 C158.462998,13.2370023 157.917003,13.5986654 157.287,13.86 C156.656997,14.1213346 155.973337,14.252 155.236,14.252 C154.498663,14.252 153.815003,14.1213346 153.185,13.86 C152.554997,13.5986654 152.009002,13.2370023 151.547,12.775 C151.084998,12.3129977 150.723335,11.7646698 150.462,11.13 C150.200665,10.4953302 150.07,9.80000378 150.07,9.044 C150.07,8.28799622 150.200665,7.59266984 150.462,6.958 C150.723335,6.32333016 151.084998,5.77500231 151.547,5.313 C152.009002,4.85099769 152.554997,4.48933464 153.185,4.228 C153.815003,3.96666536 154.498663,3.836 155.236,3.836 C155.973337,3.836 156.656997,3.96666536 157.287,4.228 C157.917003,4.48933464 158.462998,4.85099769 158.925,5.313 C159.387002,5.77500231 159.748665,6.32333016 160.01,6.958 C160.271335,7.59266984 160.402,8.28799622 160.402,9.044 Z M159.338,9.044 C159.338,8.46533044 159.244668,7.91466928 159.058,7.392 C158.871332,6.86933072 158.600668,6.40966865 158.246,6.013 C157.891332,5.61633135 157.459669,5.3013345 156.951,5.068 C156.442331,4.8346655 155.87067,4.718 155.236,4.718 C154.60133,4.718 154.029669,4.8346655 153.521,5.068 C153.012331,5.3013345 152.580668,5.61633135 152.226,6.013 C151.871332,6.40966865 151.600668,6.86933072 151.414,7.392 C151.227332,7.91466928 151.134,8.46533044 151.134,9.044 C151.134,9.62266956 151.227332,10.1733307 151.414,10.696 C151.600668,11.2186693 151.871332,11.675998 152.226,12.068 C152.580668,12.460002 153.012331,12.7726655 153.521,13.006 C154.029669,13.2393345 154.60133,13.356 155.236,13.356 C155.87067,13.356 156.442331,13.2393345 156.951,13.006 C157.459669,12.7726655 157.891332,12.460002 158.246,12.068 C158.600668,11.675998 158.871332,11.2186693 159.058,10.696 C159.244668,10.1733307 159.338,9.62266956 159.338,9.044 Z M165.68,14 L164.672,14 L164.672,4.984 L161.354,4.984 L161.354,4.088 L168.998,4.088 L168.998,4.984 L165.68,4.984 L165.68,14 Z M171.49,4.088 L171.49,8.134 L173.226,8.134 C173.730003,8.134 174.187331,8.20866592 174.598,8.358 C175.008669,8.50733408 175.360999,8.71733198 175.655,8.988 C175.949001,9.25866802 176.175333,9.5806648 176.334,9.954 C176.492667,10.3273352 176.572,10.7379978 176.572,11.186 C176.572,11.6340022 176.490334,12.0306649 176.327,12.376 C176.163666,12.7213351 175.935001,13.0153321 175.641,13.258 C175.346999,13.5006679 174.992335,13.6849994 174.577,13.811 C174.161665,13.9370006 173.702003,14 173.198,14 L170.482,14 L170.482,4.088 L171.49,4.088 Z M171.49,13.104 L173.142,13.104 C173.935337,13.104 174.537331,12.9430016 174.948,12.621 C175.358669,12.2989984 175.564,11.7740036 175.564,11.046 C175.564,10.4299969 175.351669,9.93766851 174.927,9.569 C174.502331,9.20033149 173.907337,9.016 173.142,9.016 L171.49,9.016 L171.49,13.104 Z M178.602,4.088 L178.602,14 L177.594,14 L177.594,4.088 L178.602,4.088 Z"
                    id="КЛИНИКА-КРАСОТЫ" stroke="none" fill="#4A4A4A" />
            </svg>
        </div>
    )
}

SiteTitle.propTypes = {}
SiteTitle.defaultProps = {}

export default SiteTitle
