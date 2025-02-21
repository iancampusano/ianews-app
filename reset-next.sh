#!/bin/bash

echo "🧹 Eliminando node_modules, package-lock.json y .next..."
rm -rf node_modules package-lock.json .next

echo "🗑 Limpiando caché de npm..."
npm cache clean --force

echo "📦 Instalando dependencias..."
npm install

echo "📦 Reiniciar la red de puertos..."
sudo lsof -t -i tcp:3000-3010 | xargs sudo kill -9

echo "🚀 Iniciando el servidor de desarrollo..."
npm run dev
