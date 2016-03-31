package pl.edu.uwm.wmii.kadry.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import pl.edu.uwm.wmii.kadry.enums.ERodzajUmowy;
import pl.edu.uwm.wmii.web.rest.dto.base.BaseDTO;

import java.time.ZonedDateTime;

/**
 * Created by wojciech.baczewski on 2016-03-29.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class UmowaDTO extends BaseDTO {

    private ZonedDateTime dataRozpoczecia;
    private ZonedDateTime dataZakonczenia;
    private Double stawkaGodzinowa;
    private ERodzajUmowy eRodzajUmowy;
}
