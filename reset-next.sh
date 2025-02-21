#!/bin/bash

echo "🧹 Eliminando node_modules, package-lock.json y .next..."
rm -rf node_modules package-lock.json .next
rm -rf .next

echo "🗑 Limpiando caché de npm..."
npm cache clean --force

echo "📦 Instalando dependencias..."
npm install

echo "🚀 Iniciando el servidor de desarrollo..."
npm run dev
