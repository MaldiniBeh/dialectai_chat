#!/bin/bash
if [ $# -ne 1 ]
then
echo "Erreur : nombre d’argument incorrect"
else
case $1 in
    serve)
    echo "Lancement du serveur Adonis..."
    node ace serve --w;;

    migration)
     echo "Lancement de la migration..."
    node ace migration:run;;

     rollback)
     echo "Suppression des tables..."
    node ace migration:rollback;;

    control)
     echo "Creation de(s) controller(s)..."
      echo "Saisir le(s) nom(s) de votre/vos controlleur(s)"
  read list

  for name in $list; do
  node ace make:controller $name
  done;;

    model)
     echo "Creation de(s) model(s)..."
      echo "Saisir le(s) nom(s) de votre/vos model(s)"
      read list

  for name in $list; do
  node ace make:model $name
  done;;

  migrate)
     echo "Creation de(s) migration(s)..."
      echo "Saisir le(s) nom(s) de votre/vos migration(s)"
      read list

  for name in $list; do
  node ace make:migration $name
  done;;

   all)
     echo "Creation de(s) migration(s),controller(s) et model(s) ..."
      echo "Saisir le(s) nom(s) de votre/vos entité(s)"
      read list

  for name in $list; do
  node ace make:model $name --migration --controller
  echo "Migration,Controller et Model de $name créés avec succès..."
  done;;

  middle)
     echo "Creation du middleware ..."
      echo "Saisir le nom de votre middleware"
      read mid
      node ace make:middleware $mid;

*)
echo "Commande non reconnu";;
esac
fi
