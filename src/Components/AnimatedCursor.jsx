// src/components/AnimatedCursor.jsx
import React, { useEffect, useRef } from 'react';
import './Cursor.css';

const colors = ['#87CEFA', '#ADD8E6', ]; // light blue, soft blue, white

const AnimatedCursor = () => {
    const cursorRef = useRef([]);

    useEffect(() => {
        const moveCursor = (e) => {
            const { clientX: x, clientY: y } = e;
            const size = 7 + Math.random() * 5;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const dot = document.createElement('div');

            dot.className = 'cursor-dot';
            dot.style.left = `${x}px`;
            dot.style.top = `${y}px`;
            dot.style.width = `${size}px`;
            dot.style.height = `${size}px`;
            dot.style.background = color;
            dot.style.boxShadow = `0 0 10px ${color}`;
            dot.style.mixBlendMode = 'screen';
            dot.style.borderRadius = '50%';
            dot.style.position = 'absolute';
            dot.style.pointerEvents = 'none';
            dot.style.transition = 'all 0.4s ease-out';
            dot.style.opacity = '0.8';

            document.body.appendChild(dot);
            cursorRef.current.push(dot);

            setTimeout(() => {
                dot.style.opacity = '0';
                dot.style.transform = `translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) scale(2.5) rotate(${Math.random() * 360}deg)`;
                dot.style.filter = 'blur(2px)';
            }, 10);

            setTimeout(() => {
                dot.remove();
                cursorRef.current = cursorRef.current.filter(d => d !== dot);
            }, 900);
        };

        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, []);

    return null;
};

export default AnimatedCursor;