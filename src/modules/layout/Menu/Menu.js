import React from 'react';
import {
  Container, Link, Button, lightColors, darkColors,
} from 'react-floating-action-button';
import './Menu.css';

export default function Menu() {
  return (
    <>
      <div className="fabMenu">
        <Container>
          <Link
            href="#"
            tooltip="Rol Grubu"
            icon="fa fa-user"
            styles={{ backgroundColor: darkColors.black, color: lightColors.white }}
          />
          <Link
            href="#"
            tooltip="Rol"
            icon="fa fa-user"
            styles={{ backgroundColor: darkColors.black, color: lightColors.white }}
          />
          <Link
            href="#"
            tooltip="ihbar / İstek"
            icon="fa fa-user"
            styles={{ backgroundColor: darkColors.black, color: lightColors.white }}
          />
          <Link
            href="#"
            tooltip="İhbar / İstek Türü"
            icon="fa fa-user"
            styles={{ backgroundColor: darkColors.black, color: lightColors.white }}
          />
          <Link
            href="#"
            tooltip="Yetki"
            icon="fa fa-user"
            styles={{ backgroundColor: darkColors.black, color: lightColors.white }}
          />
          <Button
            icon="fa fa-plus"
            rotate
            styles={{ backgroundColor: darkColors.black, color: lightColors.white }}
          />
        </Container>

      </div>

    </>
  );
}
