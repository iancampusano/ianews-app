#!/bin/bash

PORT=3000
PID=$(lsof -t -i:$PORT)

if [ -z "$PID" ]; then
  echo "✅ No hay procesos usando el puerto $PORT."
else
  echo "🛑 Matando el proceso en el puerto $PORT (PID: $PID)..."
  kill -9 $PID
  echo "✅ Proceso eliminado con éxito."
fi
